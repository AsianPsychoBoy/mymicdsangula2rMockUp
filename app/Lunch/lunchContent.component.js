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
var mockdata_service_1 = require('../mockdata.service');
var platform_browser_1 = require('@angular/platform-browser');
var d = new Date();
var date = {
    year: d.getFullYear(),
    month: d.getMonth(),
    day: d.getDate()
};
var lunchContent = (function () {
    function lunchContent(dataService, DomSanitizationService) {
        this.dataService = dataService;
        this.DomSanitizationService = DomSanitizationService;
        this.date = {
            year: d.getFullYear(),
            month: d.getMonth(),
            day: d.getDate()
        };
        this.bubbleClick = [false, false, false, false, false];
        this.moveDirection = [0, 0, 0, 0, 0];
        var lunchObj = dataService.getLunch(this.date);
        this.lunchSpecial = lunchObj.lunchSpecial;
        this.lunchState = lunchObj.lunchState;
        this.lunch = lunchObj.lunch;
        DomSanitizationService.bypassSecurityTrustStyle("transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95)");
    }
    ;
    lunchContent.prototype.onClickBubble = function (x) {
        for (var i = 0; i <= 4; i++) {
            this.bubbleClick[i] = false;
        }
        ;
        this.bubbleClick[x] = !(this.bubbleClick[x]);
        for (var i = 0; i <= 4; i++) {
            this.moveDirection[i] = 0;
        }
        ;
        this.moveDirection[x] = -1;
        for (var i = x + 1; i <= 4; i++) {
            this.moveDirection[i] = 1;
        }
        ;
        console.log(this.moveDirection);
    };
    lunchContent.prototype.setStyles = function (x) {
        var styles = {
            animation: this.bubbleClick[x] ? 'magnify 0.4s ease 0s 1 normal forwards running' : 'magnify 0.4s ease 0s 1 reverse backwards running',
        };
        return styles;
    };
    lunchContent = __decorate([
        core_1.Component({
            selector: 'app-content',
            templateUrl: '../templates/lunchContent/lunchContent.html',
            styleUrls: ['../css/lunchContent/lunchContent.css'],
            directives: [],
            providers: [mockdata_service_1.DomData]
        }), 
        __metadata('design:paramtypes', [mockdata_service_1.DomData, platform_browser_1.DomSanitizationService])
    ], lunchContent);
    return lunchContent;
}());
exports.lunchContent = lunchContent;
//# sourceMappingURL=lunchContent.component.js.map