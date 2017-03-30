import { Component } from '@angular/core';
import { Member } from './member';
import { TeamDataService } from './team-data.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
    teamMemberList:Member[];
    selectedTeamMember:Member;
    showEditMemberTemplate:Boolean;
    showNewMemberTemplate:Boolean;
    showMemberTemplate:Boolean;
    dataUpdateFlag:Boolean;

  	constructor(private teamDataService: TeamDataService) {
    	this.showEditMemberTemplate = false;
		  this.showNewMemberTemplate = false;
  		this.showMemberTemplate = false;
      this.dataUpdateFlag = false;
  	}

    ngOnInit(): void {
      this.teamDataService.getMembers()
      .subscribe(members => {
            this.teamMemberList = members;
        });
    }

    onShowMemberDetails(memberDetailObj:Member) {
      //let memberCopy = Object.assign({}, memberDetailObj);
      this.showMemberTemplate = true;
      this.showEditMemberTemplate = false;
      this.showNewMemberTemplate = false;
      this.selectedTeamMember = memberDetailObj; 
    }

    onShowAddMemberTemplate() {
      this.showMemberTemplate = false;
      this.showEditMemberTemplate = false;
      this.showNewMemberTemplate = true;
    }

    onDeleteMemberDetails(member) {
      this.showEditMemberTemplate = false;
      this.showNewMemberTemplate = false;
      this.showMemberTemplate = false;
      var delItemIdx = this.teamMemberList.findIndex(function(elem) {
        return elem._id == member._id;
      });
      this.teamMemberList.splice(delItemIdx, 1);
    }

  	onEditMemberDetails(editObj: any) {
    	this.selectedTeamMember = editObj.memberData;
    	this.showEditMemberTemplate = editObj.editFlag;
    	this.showNewMemberTemplate = false;
    	this.showMemberTemplate = false;
  	}

  	onSubmitMemberUpdates(editMemberObj: any) {
    	this.selectedTeamMember = editMemberObj;
    	this.showEditMemberTemplate = false;
    	this.showNewMemberTemplate = false;
    	this.showMemberTemplate = true;
  	}

    onAddMemberDetails(addMemberObj: any) {
      this.selectedTeamMember = addMemberObj;
      this.showEditMemberTemplate = false;
      this.showNewMemberTemplate = false;
      this.showMemberTemplate = true;
      this.teamMemberList.push(addMemberObj);
    }
}