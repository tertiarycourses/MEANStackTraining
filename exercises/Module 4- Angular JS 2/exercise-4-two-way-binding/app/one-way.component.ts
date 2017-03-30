import {Component} from '@angular/core';

@Component({
  selector: 'one-way',
  template: `
    <h1>{{title}}</h1>
    <input [value]="message1">
    <br>
    <input value="{{message2}}">
    <br><br>
  `
})
export class OneWayComponent {
  title = "Angular 2 One Way Binding Example";
  message1 = "One way property binding";
  message2 = "Binding using interpolation";
}
