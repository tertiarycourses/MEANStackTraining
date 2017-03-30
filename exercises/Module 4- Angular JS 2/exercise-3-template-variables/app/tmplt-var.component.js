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
var TmpltVarComponent = (function () {
    function TmpltVarComponent() {
    }
    TmpltVarComponent = __decorate([
        core_1.Component({
            selector: 'tmplt-var',
            template: "\n\t\t<br><div>Hello Bro!<br>What you learning today\n\t\t\t<input type=\"text\" #inputElement (keyup)=\"0\">\n\t\t\t<br>\n\t\t\t<div class=\"hide-msg alert\" [class.show-msg]=\"inputElement.value == 'angular'\">\n\t\t\t\tAwesome! you are a Ninja!\n\t\t\t</div><br>\n\t\t\t<button [disabled]=\"inputElement.value =='angular'\">Test Your Learning</button>\n\t</div>\n\t",
            styleUrls: ['app/tmplt-var.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TmpltVarComponent);
    return TmpltVarComponent;
}());
exports.TmpltVarComponent = TmpltVarComponent;
//# sourceMappingURL=tmplt-var.component.js.map