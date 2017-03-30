import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { EditMemberComponent } from './edit-member.component';
import { MemberDetailComponent } from './member-detail.component';
import { TeamDataService } from './team-data.service';
import { NewMemberComponent } from './new-member.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, MemberDetailComponent, EditMemberComponent, NewMemberComponent ],
  providers: [ TeamDataService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }