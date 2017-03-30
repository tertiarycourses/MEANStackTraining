import {Component} from '@angular/core';

@Component({
	selector: 'tmplt-var',
	template: `
		<br><div>Hello Bro!<br>What you learning today
			<input type="text" #inputElement (keyup)="0">
			<br>
			<div class="hide-msg alert" [class.show-msg]="inputElement.value == 'angular'">
				Awesome! you are a Ninja!
			</div><br>
			<button [disabled]="inputElement.value =='angular'">Test Your Learning</button>
	</div>
	`,
	styleUrls: ['app/tmplt-var.component.css']
})
export class TmpltVarComponent {}
