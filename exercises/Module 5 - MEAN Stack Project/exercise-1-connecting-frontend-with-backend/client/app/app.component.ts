import { Component } from '@angular/core';
import { Member } from './member';
import { TeamDataService } from './team-data.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
    teamMemberList:Member[];

  	constructor(private teamDataService: TeamDataService) {}

    ngOnInit(): void {
      this.teamDataService.getMembers()
      .subscribe(members => {
            this.teamMemberList = members;
        });
    }
}