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

});

module.exports = router;