import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Testing Template Variables</h1>
    <one-way></one-way>
    <prop-bind></prop-bind>
    <two-way></two-way>
  `
})
export class AppComponent { }