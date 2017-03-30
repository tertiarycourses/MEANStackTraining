import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { TeamDataService } from './team-data.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent ],
  providers: [ TeamDataService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }