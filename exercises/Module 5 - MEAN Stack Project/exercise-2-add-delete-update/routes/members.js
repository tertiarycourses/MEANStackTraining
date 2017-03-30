var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teamdbs');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	var teamMemberSchema = new mongoose.Schema({
        name: String,
        profile: String,
        experience: String,
        skills: String,
        engagement: String,
        agency: String
    });
    var TeamMember = mongoose.model('Member', teamMemberSchema);

	// Get all members
	router.get('/members', function(req, res, next){
		console.log("getting all members from mongo..");
	    TeamMember.find(function(err, members){
	       	if(err){
	            res.send(err);
	        }
	        res.json(members);
	    });
	});

	// Get member by id
	router.get('/member/:id', function(req, res, next){
		var the_id = mongoose.Types.ObjectId(req.params.id);
	    TeamMember.findOne({_id: the_id}, function(err, member){
	        if(err){
	            res.send(err);
	        }
	        res.json(member);
	    });
	});

	//Add and Save Member
	router.post('/member', function(req, res, next){
	    var newMember = TeamMember(req.body);
	    console.log("adding new memnber: " + newMember);
	    if(!newMember.name || !newMember.profile){
	        res.status(400);
	        res.json({
	            "error": "Bad Data"
	        });
	    } else {
	        newMember.save(function(err, member){
	            if(err){
	                res.send(err);
	            }
	            res.json(member);
	        });
	    }
	});

	//Update Member
	router.put('/member/:id', function(req, res, next){
	    var newMember = req.body;
        console.log('update body: ' + req.body);
        var updMember = {};
        updMember.name = newMember.membername;
        updMember.profile = newMember.profile;
        updMember.skills = newMember.skills;
        updMember.agency = newMember.agency;
        updMember.engagement = newMember.engagement;
        updMember.experience = newMember.experience;

	    var the_id = mongoose.Types.ObjectId(req.params.id);
        TeamMember.findByIdAndUpdate({_id: the_id}, updMember, function(err, member) {
        	if(err){
            	res.send(err);
        	}
        	res.json(member);
    	});
	});

	// Delete Member
	router.delete('/member/:id', function(req, res, next){
		console.log("deleting member from mongo: " + req.params.id);
		var the_id = mongoose.Types.ObjectId(req.params.id);
	    TeamMember.findByIdAndRemove({_id: the_id}, function(err, member){
	    	if(err){
	            res.send(err);
	        }
	        res.json(member);
	    });
	});


});

module.exports = router;