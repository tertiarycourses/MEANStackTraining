"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PropBindingComponent = (function () {
    function PropBindingComponent() {
        this.title = "Property Binding Demo";
        this.movie = {
            name: "Storks",
            url: "app/storks-movie.jpg"
        };
        this.isSelected = true;
        this.showRating = true;
        this.btnValue = false;
    }
    PropBindingComponent = __decorate([
        core_1.Component({
            selector: 'prop-bind',
            template: "\n    <br>\n    <h1>{{title}}</h1>\n    <h4>{{movie.name}}</h4>\n    <img [src]=\"movie.url\">\n    <br>\n    <div class=\"alert\" [ngClass]=\"{blueborder:isSelected}\">Storks deliver babies...</div>\n    <div class=\"hide-msg\" [class.show-msg]=\"showRating\">PG</div>\n    <button [attr.value]=\"btnValue\" [style.background]=\"btnValue ? 'black' : 'blue'\">ok</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PropBindingComponent);
    return PropBindingComponent;
}());
exports.PropBindingComponent = PropBindingComponent;
//# sourceMappingURL=prop-binding.component.js.map