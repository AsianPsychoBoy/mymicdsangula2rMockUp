System.register(['angular2/core', './mockdata.service'], function(exports_1, context_1) {
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
    var core_1, mockdata_service_1;
    var _bgService, templateUrl, styleUrl, e, BgComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mockdata_service_1_1) {
                mockdata_service_1 = mockdata_service_1_1;
            }],
        execute: function() {
            _bgService = new mockdata_service_1.DomData();
            try {
                templateUrl = _bgService.getBg().HTMLUrl;
                styleUrl = _bgService.getBg().StyleUrl;
            }
            catch (e) {
                console.log(e);
            }
            if (!templateUrl || !styleUrl) {
                templateUrl = '../Backgrounds/BgFail/BgFail.html';
                styleUrl = '';
            }
            BgComponent = (function () {
                function BgComponent(_BgService) {
                    this._BgService = _BgService;
                    try {
                        System.import(_BgService.getBg().LibUrl);
                        System.import(_BgService.getBg().JSUrl);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                BgComponent = __decorate([
                    core_1.Component({
                        selector: 'my-bg',
                        providers: [mockdata_service_1.DomData],
                        templateUrl: templateUrl,
                        styleUrls: [styleUrl]
                    }), 
                    __metadata('design:paramtypes', [mockdata_service_1.DomData])
                ], BgComponent);
                return BgComponent;
            }());
            exports_1("BgComponent", BgComponent);
        }
    }
});
//# sourceMappingURL=background.component.js.map