import { Component, EventEmitter } from '@angular/core';
import { Member } from './member';
import { TeamDataService } from './team-data.service';

@Component({
	selector: 'member-detail',
	inputs: ['selectedMember', 'showMemberFlag'],
	outputs: ['onEditMember', 'onDeleteMember'],
	templateUrl: 'app/member-detail.component.html'
})
export class MemberDetailComponent {
	selectedMember:Member;
	showMemberFlag:Boolean;
	onEditMember: EventEmitter<any> = new EventEmitter<any>();
	onDeleteMember: EventEmitter<any> = new EventEmitter<any>();
	isDirect;

	constructor(private teamDataService: TeamDataService) {}

	ngOnChanges() {
		if(this.selectedMember) {
			if(this.selectedMember.engagement == "internal") {
				this.isDirect = true;
			} else {
				this.isDirect = false;
			}
		}	
	}

	onEditMemberDetails() {
		var editMemberObj = {
	      editFlag : true,
	      memberData : this.selectedMember
	    }
		this.onEditMember.emit(editMemberObj);
	}

	onDeleteMemberDetails() {
		this.teamDataService.deleteMember(this.selectedMember._id)
			.subscribe(member => {
				this.onDeleteMember.emit(member);
			});
		
	}
}
