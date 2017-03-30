import { Component, EventEmitter } from '@angular/core';
import { Member } from './member';
import { TeamDataService } from './team-data.service';

@Component({
	selector: 'new-member',
	inputs: ['newMemberFlag'],
	outputs: ['onAddMember'],
	templateUrl: 'app/new-member.component.html'
})
export class NewMemberComponent {
	newMemberFlag:Boolean;
	onAddMember: EventEmitter<any> = new EventEmitter<any>();

	constructor(private teamDataService: TeamDataService) {}

	onSubmitNewMember() {
		var newMemberObj = {};
		newMemberObj.name = this.membername;
		newMemberObj.profile = this.profile;
		newMemberObj.skills = this.skills;
		newMemberObj.experience = this.experience;
		newMemberObj.engagement = this.engagement;
		newMemberObj.agency = this.agency;
		this.teamDataService.addMember(newMemberObj)
			.subscribe(member => {
				this.onAddMember.emit(member);
			});
	}
}
