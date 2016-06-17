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
var nav_component_1 = require('./nav.component');
var background_component_1 = require('./background.component');
var mockdata_service_1 = require('./mockdata.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mymicds-app',
            template: " <div class=\"app-container\">\n                    <my-bg></my-bg>\n                    <my-navbar class=\"navbar\">\n                    </my-navbar>\n                    <router-outlet></router-outlet>\n                </div>",
            directives: [nav_component_1.NavComponent, background_component_1.BgComponent],
            providers: [mockdata_service_1.DomData, router_1.ROUTER_PROVIDERS],
            styleUrls: ['./css/main.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map