import { Component } from '@angular/core';
import { Member } from './member';
import { TeamDataService } from './team-data.service';

@Component({
	selector: 'edit-member',
	inputs: ['selectedMember', 'editMemberFlag'],
	templateUrl: 'app/edit-member.component.html'
})
export class EditMemberComponent {
	selectedMember: Member;
	editMemberFlag:Boolean;

	constructor(private teamDataService: TeamDataService) {}

	onSubmitMemberDetails(updatedMember) {
		console.log("on submit member details" + updatedMember);
	}

	onCancelEdit() {
		console.log("on cancel edit");
	}
}
