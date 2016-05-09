System.register(['angular2/core', './mockdata.service', 'angular2/platform/browser', './nav.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mockdata_service_1, browser_1, nav_component_1;
    var _titleService, _dataService, NavData, templateUrl, ContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mockdata_service_1_1) {
                mockdata_service_1 = mockdata_service_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            }],
        execute: function() {
            _titleService = new browser_1.Title;
            _dataService = new mockdata_service_1.DomData;
            //do logic to determine which page is selected, and get the correcponding content
            NavData = new nav_component_1.NavComponent(_titleService, _dataService);
            templateUrl = _dataService.getContent(NavData.selectedPage).templateUrl;
            ContentComponent = (function () {
                function ContentComponent() {
                }
                ContentComponent = __decorate([
                    core_1.Component({
                        selector: 'app-content',
                        templateUrl: templateUrl
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContentComponent);
                return ContentComponent;
            }());
            exports_1("ContentComponent", ContentComponent);
        }
    }
});
//# sourceMappingURL=content.component.js.map