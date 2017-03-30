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

  	onEditMemberDetails(editObj: any) {
    	this.selectedTeamMember = editObj.memberData;
    	this.showEditMemberTemplate = editObj.editFlag;
    	this.showNewMemberTemplate = false;
    	this.showMemberTemplate = false;
  	}
}