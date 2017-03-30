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
var MemberDetailComponent = (function () {
    function MemberDetailComponent(teamDataService) {
        this.teamDataService = teamDataService;
        this.onEditMember = new core_1.EventEmitter();
        this.onDeleteMember = new core_1.EventEmitter();
    }
    MemberDetailComponent.prototype.ngOnChanges = function () {
        if (this.selectedMember) {
            if (this.selectedMember.engagement == "internal") {
                this.isDirect = true;
            }
            else {
                this.isDirect = false;
            }
        }
    };
    MemberDetailComponent.prototype.onEditMemberDetails = function () {
        var editMemberObj = {
            editFlag: true,
            memberData: this.selectedMember
        };
        this.onEditMember.emit(editMemberObj);
    };
    MemberDetailComponent.prototype.onDeleteMemberDetails = function () {
        var _this = this;
        this.teamDataService.deleteMember(this.selectedMember._id)
            .subscribe(function (member) {
            _this.onDeleteMember.emit(member);
        });
    };
    return MemberDetailComponent;
}());
MemberDetailComponent = __decorate([
    core_1.Component({
        selector: 'member-detail',
        inputs: ['selectedMember', 'showMemberFlag'],
        outputs: ['onEditMember', 'onDeleteMember'],
        templateUrl: 'app/member-detail.component.html'
    }),
    __metadata("design:paramtypes", [team_data_service_1.TeamDataService])
], MemberDetailComponent);
exports.MemberDetailComponent = MemberDetailComponent;
//# sourceMappingURL=member-detail.component.js.map