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
var OneWayComponent = (function () {
    function OneWayComponent() {
        this.title = "Angular 2 One Way Binding Example";
        this.message1 = "One way property binding";
        this.message2 = "Binding using interpolation";
    }
    OneWayComponent = __decorate([
        core_1.Component({
            selector: 'one-way',
            template: "\n    <h1>{{title}}</h1>\n    <input [value]=\"message1\">\n    <br>\n    <input value=\"{{message2}}\">\n    <br><br>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], OneWayComponent);
    return OneWayComponent;
}());
exports.OneWayComponent = OneWayComponent;
//# sourceMappingURL=one-way.component.js.map