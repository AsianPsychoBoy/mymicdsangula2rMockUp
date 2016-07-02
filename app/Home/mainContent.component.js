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
var progress_component_1 = require('./progress/progress.component');
var mockdata_service_1 = require('../mockdata.service');
var _navService = new mockdata_service_1.DomData();
var styleUrl = _navService.getMain().selectedStyle.StyleUrl;
var templateUrl = _navService.getMain().selectedStyle.TemplateUrl;
var mainContent = (function () {
    function mainContent(_DomService) {
        this._DomService = _DomService;
        this.percentage = _DomService.getProgress().classData.overall_percentage;
        this.current_class = _DomService.getProgress().classData.current_class;
        this.current_percentage = _DomService.getProgress().classData.current_percentage;
    }
    ;
    mainContent = __decorate([
        core_1.Component({
            selector: 'app-content',
            templateUrl: templateUrl,
            styleUrls: [styleUrl],
            directives: [progress_component_1.MyProgress]
        }), 
        __metadata('design:paramtypes', [mockdata_service_1.DomData])
    ], mainContent);
    return mainContent;
}());
exports.mainContent = mainContent;
//# sourceMappingURL=mainContent.component.js.map