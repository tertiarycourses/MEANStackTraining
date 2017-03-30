import { Component } from '@angular/core';
import { Member } from './member';
import { TeamDataService } from './team-data.service';

@Component({
	selector: 'new-member',
	inputs: ['newMemberFlag'],
	templateUrl: 'app/new-member.component.html'
})
export class NewMemberComponent {
	newMemberFlag:Boolean;

	constructor(private teamDataService: TeamDataService) {}

	onSubmitNewMember() {
		console.log("on add new member");
	}
}
