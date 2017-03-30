import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { OneWayComponent } from './one-way.component';
import { PropBindingComponent } from './prop-binding.component';
import { TwoWayComponent } from './two-way.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OneWayComponent, PropBindingComponent, TwoWayComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }