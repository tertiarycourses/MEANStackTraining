import {Component} from '@angular/core';

@Component({
  selector: 'prop-bind',
  template: `
    <br>
    <h1>{{title}}</h1>
    <h4>{{movie.name}}</h4>
    <img [src]="movie.url">
    <br>
    <div class="alert" [ngClass]="{blueborder:isSelected}">Storks deliver babies...</div>
    <div class="hide-msg" [class.show-msg]="showRating">PG</div>
    <button [attr.value]="btnValue" [style.background]="btnValue ? 'black' : 'blue'">ok</button>
  `
})
export class PropBindingComponent {
  title = "Property Binding Demo";
  movie = {
    name : "Storks",
    url : "app/storks-movie.jpg"
  };
  isSelected = true;
  showRating = true;
  btnValue = false;
}