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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var team_data_service_1 = require("./team-data.service");
var EditMemberComponent = (function () {
    function EditMemberComponent(teamDataService) {
        this.teamDataService = teamDataService;
        this.onSubmitData = new core_1.EventEmitter();
    }
    EditMemberComponent.prototype.onSubmitMemberDetails = function (updatedMember) {
        var _this = this;
        this.teamDataService.updateMember(updatedMember, this.selectedMember._id)
            .subscribe(function (member) {
            _this.onSubmitData.emit(member);
        });
    };
    EditMemberComponent.prototype.onCancelEdit = function () {
        this.onSubmitData.emit(selectedMember);
    };
    return EditMemberComponent;
}());
EditMemberComponent = __decorate([
    core_1.Component({
        selector: 'edit-member',
        inputs: ['selectedMember', 'editMemberFlag'],
        outputs: ['onSubmitData'],
        templateUrl: 'app/edit-member.component.html'
    }),
    __metadata("design:paramtypes", [team_data_service_1.TeamDataService])
], EditMemberComponent);
exports.EditMemberComponent = EditMemberComponent;
//# sourceMappingURL=edit-member.component.js.map