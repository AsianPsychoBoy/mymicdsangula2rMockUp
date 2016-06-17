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
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var mockdata_service_1 = require('./mockdata.service'); //Do not put two copies of the same service
var _navService = new mockdata_service_1.DomData();
var styleUrl = _navService.getNav().selectedStyle.StyleUrl;
var NavComponent = (function () {
    function NavComponent(_titleService, _DomService) {
        this._titleService = _titleService;
        this._DomService = _DomService;
        this.blur = [false, false, false, false, false];
        this.isActive = [true, false, false, false, false];
        this.pages = this._DomService.getNav().navTitles;
        //emit events to alert the other components to render the app
        this.selectedPage = 'Home';
    }
    NavComponent.prototype.restore = function (x) {
        for (var i = 0; i < this.isActive.length; i++) {
            this.isActive[i] = false;
        }
    };
    NavComponent.prototype.magnify = function (x) {
        this.restore(x);
        this.isActive[x] = true;
    };
    NavComponent.prototype.applyBlur = function (x) {
        for (var i = 0; i < this.blur.length; i++) {
            if (i != x) {
                this.blur[i] = true;
            }
        }
    };
    NavComponent.prototype.removeBlur = function (x) {
        for (var i = 0; i < this.blur.length; i++) {
            this.blur[i] = false;
        }
    };
    NavComponent.prototype.mouseEnter = function (x) {
        this.applyBlur(x);
    };
    NavComponent.prototype.mouseLeave = function (x) {
        this.removeBlur(x);
    };
    NavComponent.prototype.onSelect = function (x) {
        this.restore(x);
        this.magnify(x);
        this._titleService.setTitle("MockUp-" + this._DomService.getNav().navTitles[x]);
        this.selectedPage = this._DomService.getNav().navTitles[x];
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'my-navbar',
            template: " <div class=\"navbar\"><div *ngFor=\"let page of pages; let i = index\"\n                [ngClass]=\"{blur: blur[i], navbar_item: true, active: isActive[i]}\" (click)=\"onSelect(i)\" \n                (mouseenter)=\"mouseEnter(i)\" (mouseleave)=\"mouseLeave(i)\"><a [routerLink]=\"['{{page}}']\">{{page}}</a></div></div>\n                ",
            directives: [common_1.NgClass],
            styleUrls: [styleUrl],
            providers: [mockdata_service_1.DomData]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, mockdata_service_1.DomData])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map