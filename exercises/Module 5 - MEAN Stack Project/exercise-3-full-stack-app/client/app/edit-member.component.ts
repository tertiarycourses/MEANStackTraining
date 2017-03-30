import { Component, EventEmitter } from '@angular/core';
import { Member } from './member';
import { TeamDataService } from './team-data.service';

@Component({
	selector: 'edit-member',
	inputs: ['selectedMember', 'editMemberFlag'],
	outputs: ['onSubmitData'],
	templateUrl: 'app/edit-member.component.html'
})
export class EditMemberComponent {
	selectedMember: Member;
	editMemberFlag:Boolean;
	onSubmitData: EventEmitter<any> = new EventEmitter<any>();

	constructor(private teamDataService: TeamDataService) {}

	onSubmitMemberDetails(updatedMember) {
		this.teamDataService.updateMember(updatedMember, this.selectedMember._id)
			.subscribe(member => {
				this.onSubmitData.emit(member);
			});
	}

	onCancelEdit() {
		this.onSubmitData.emit(selectedMember);
	}
}
