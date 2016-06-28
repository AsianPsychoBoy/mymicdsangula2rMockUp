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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
//import {NavComponent} from './nav.component';
var background_component_1 = require('./background.component');
var mockdata_service_1 = require('./mockdata.service');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var _navService = new mockdata_service_1.DomData();
var styleUrl = _navService.getNav().selectedStyle.StyleUrl;
var templateUrl = _navService.getNav().selectedStyle.TemplateUrl;
var AppComponent = (function () {
    function AppComponent(_titleService, _DomService) {
        this._titleService = _titleService;
        this._DomService = _DomService;
        this.blur = [false, false, false, false, false];
        this.isActive = [true, false, false, false, false];
        this.pages = this._DomService.getNav().navTitles;
        //emit events to alert the other components to render the app
        this.selectedPage = 'Home';
    }
    AppComponent.prototype.restore = function (x) {
        for (var i = 0; i < this.isActive.length; i++) {
            this.isActive[i] = false;
        }
    };
    AppComponent.prototype.magnify = function (x) {
        this.restore(x);
        this.isActive[x] = true;
    };
    AppComponent.prototype.applyBlur = function (x) {
        for (var i = 0; i < this.blur.length; i++) {
            if (i != x) {
                this.blur[i] = true;
            }
        }
    };
    AppComponent.prototype.removeBlur = function (x) {
        for (var i = 0; i < this.blur.length; i++) {
            this.blur[i] = false;
        }
    };
    AppComponent.prototype.mouseEnter = function (x) {
        this.applyBlur(x);
    };
    AppComponent.prototype.mouseLeave = function (x) {
        this.removeBlur(x);
    };
    AppComponent.prototype.onSelect = function (x) {
        this.restore(x);
        this.magnify(x);
        this._titleService.setTitle("MockUp-" + this._DomService.getNav().navTitles[x]);
        this.selectedPage = this._DomService.getNav().navTitles[x];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mymicds-app',
            templateUrl: templateUrl,
            directives: [background_component_1.BgComponent, common_1.NgClass, router_1.ROUTER_DIRECTIVES],
            providers: [mockdata_service_1.DomData],
            styleUrls: ['./css/main.css', styleUrl]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, mockdata_service_1.DomData])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map