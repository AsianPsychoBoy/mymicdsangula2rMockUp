System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DomData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DomData = (function () {
                function DomData() {
                }
                DomData.prototype.getNav = function () {
                    var styleList = {
                        Wriggle: {
                            StyleUrl: '../css/navbar/Wriggle.css',
                            Selected: false,
                        },
                        Waves: {
                            StyleUrl: '../css/navbar/Waves.css',
                            Selected: true
                        }
                    };
                    for (var style in styleList) {
                        if (styleList[style].Selected) {
                            var selectedStyle = styleList[style];
                        }
                    }
                    return {
                        navTitles: ["Home", "Lunch", "Planner", "Styles", "Poopyface"],
                        selectedStyle: selectedStyle
                    };
                };
                DomData.prototype.getPlanner = function () {
                    //use http to get planner info 
                };
                DomData.prototype.getweather = function () { };
                DomData.prototype.getProgress = function () { };
                DomData.prototype.getClasses = function () { };
                //Background services
                DomData.prototype.getBg = function () {
                    var bgList = {
                        Wriggle: {
                            Selected: false,
                            JSUrl: '../Backgrounds/Wriggle/Wriggle.js',
                            HTMLUrl: '../Backgrounds/Wriggle/Wriggle.html',
                            StyleUrl: '../Backgrounds/Wriggle/Wriggle.css',
                            LibUrl: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js'
                        },
                        Waves: {
                            Selected: true,
                            JSUrl: '../Backgrounds/Waves/Waves.js',
                            HTMLUrl: '../Backgrounds/Waves/Waves.html',
                            StyleUrl: '../Backgrounds/Waves/Waves.css',
                            LibUrl: ''
                        }
                    };
                    var selectedBg;
                    Object.getOwnPropertyNames(bgList).forEach(function (val, idx, array) {
                        if (bgList[val].Selected) {
                            selectedBg = bgList[val];
                        }
                    });
                    return selectedBg;
                };
                DomData.prototype.getContent = function (page) {
                    if (page == "Home") {
                        return {
                            templateUrl: '../templates/home.html'
                        };
                    }
                };
                DomData = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DomData);
                return DomData;
            }());
            exports_1("DomData", DomData);
        }
    }
});
//# sourceMappingURL=mockdata.service.js.map