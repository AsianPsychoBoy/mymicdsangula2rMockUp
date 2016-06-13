System.register(['angular2/core', './progress.component'], function(exports_1, context_1) {
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
    var core_1, progress_component_1;
    var mainContent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (progress_component_1_1) {
                progress_component_1 = progress_component_1_1;
            }],
        execute: function() {
            //do logic to determine which page is selected, and get the correcponding content
            mainContent = (function () {
                function mainContent() {
                }
                mainContent = __decorate([
                    core_1.Component({
                        selector: 'app-content',
                        templateUrl: '../templates/content/mainContent.html',
                        styleUrls: ['../css/content/content.css'],
                        directives: [progress_component_1.MyProgress]
                    }), 
                    __metadata('design:paramtypes', [])
                ], mainContent);
                return mainContent;
            }());
            exports_1("mainContent", mainContent);
        }
    }
});
//# sourceMappingURL=mainContent.component.js.map