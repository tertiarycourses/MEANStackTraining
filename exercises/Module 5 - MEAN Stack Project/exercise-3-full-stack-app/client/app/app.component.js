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
var AppComponent = (function () {
    function AppComponent(teamDataService) {
        this.teamDataService = teamDataService;
        this.showEditMemberTemplate = false;
        this.showNewMemberTemplate = false;
        this.showMemberTemplate = false;
        this.dataUpdateFlag = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamDataService.getMembers()
            .subscribe(function (members) {
            _this.teamMemberList = members;
        });
    };
    AppComponent.prototype.onShowMemberDetails = function (memberDetailObj) {
        //let memberCopy = Object.assign({}, memberDetailObj);
        this.showMemberTemplate = true;
        this.showEditMemberTemplate = false;
        this.showNewMemberTemplate = false;
        this.selectedTeamMember = memberDetailObj;
    };
    AppComponent.prototype.onShowAddMemberTemplate = function () {
        this.showMemberTemplate = false;
        this.showEditMemberTemplate = false;
        this.showNewMemberTemplate = true;
    };
    AppComponent.prototype.onDeleteMemberDetails = function (member) {
        this.showEditMemberTemplate = false;
        this.showNewMemberTemplate = false;
        this.showMemberTemplate = false;
        var delItemIdx = this.teamMemberList.findIndex(function (elem) {
            return elem._id == member._id;
        });
        this.teamMemberList.splice(delItemIdx, 1);
    };
    AppComponent.prototype.onEditMemberDetails = function (editObj) {
        this.selectedTeamMember = editObj.memberData;
        this.showEditMemberTemplate = editObj.editFlag;
        this.showNewMemberTemplate = false;
        this.showMemberTemplate = false;
    };
    AppComponent.prototype.onSubmitMemberUpdates = function (editMemberObj) {
        this.selectedTeamMember = editMemberObj;
        this.showEditMemberTemplate = false;
        this.showNewMemberTemplate = false;
        this.showMemberTemplate = true;
    };
    AppComponent.prototype.onAddMemberDetails = function (addMemberObj) {
        this.selectedTeamMember = addMemberObj;
        this.showEditMemberTemplate = false;
        this.showNewMemberTemplate = false;
        this.showMemberTemplate = true;
        this.teamMemberList.push(addMemberObj);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [team_data_service_1.TeamDataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map