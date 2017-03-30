import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TmpltVarComponent } from './tmplt-var.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TmpltVarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }