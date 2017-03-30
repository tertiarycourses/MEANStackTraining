import {Component} from '@angular/core';

@Component({
  selector: 'two-way',
  templateUrl: 'app/two-way.component.html'
})

export class TwoWayComponent {
  title:string = 'Two Way DataBinding Demo';
  movie:any = {
		name : 'The Secret Life of Pets'
  };
}
