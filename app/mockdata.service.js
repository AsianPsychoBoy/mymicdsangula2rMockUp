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
var DomData = (function () {
    function DomData() {
    }
    DomData.prototype.getNav = function () {
        var styleList = {
            Waves: {
                StyleUrl: '../css/navbar/Waves.css',
                TemplateUrl: '../templates/navbar/waves.html',
                Selected: false
            },
            default: {
                StyleUrl: '../css/navbar/default.css',
                TemplateUrl: '../templates/navbar/default.html',
                Selected: true
            }
        };
        for (var style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle = styleList[style];
            }
        }
        return {
            navTitles: ["Home", "Lunch", "Planner", "Settings", "Profile"],
            selectedStyle: selectedStyle
        };
    };
    DomData.prototype.getPlanner = function () {
        var styleList = {
            Waves: {
                StyleUrl: '../css/plannerContent/Waves.css',
                TemplateUrl: '../templates/plannerContent/waves.html',
                Selected: false
            },
            default: {
                StyleUrl: '../css/plannerContent/default.css',
                TemplateUrl: '../templates/plannerContent/default.html',
                Selected: true
            }
        };
        for (var style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle = styleList[style];
            }
        }
        return { selectedStyle: selectedStyle };
    };
    DomData.prototype.getweather = function () { };
    DomData.prototype.getProgress = function () {
        var styleList = {
            Waves: {
                StyleUrl: '../css/mainContent/progress/Waves.progress.css',
                TemplateUrl: '../templates/mainContent/progress/waves.progress.html',
                Selected: false
            },
            default: {
                StyleUrl: '../css/mainContent/progress/default.progress.css',
                TemplateUrl: '../templates/mainContent/progress/default.progress.html',
                Selected: true
            }
        };
        for (var style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle = styleList[style];
            }
        }
        var classData = {
            A: "Math",
            A_percentage: 100,
            B: "English",
            B_percentage: 100,
            C: "Science",
            C_percentage: 100,
            D: "History",
            D_percentage: 100,
            E: "World Language",
            E_percentage: 70,
            F: "Choir",
            F_percentage: 0,
            G: "Free",
            G_percentage: 0,
            overall_percentage: 75,
            current_class: "E",
            current_percentage: 70,
            selectedStyle: selectedStyle
        };
        return classData;
    };
    //Background services
    DomData.prototype.getBg = function () {
        var bgList = {
            default: {
                Selected: true,
                JSUrl: '../Backgrounds/default/default.js',
                HTMLUrl: '../Backgrounds/default/default.html',
                StyleUrl: '../Backgrounds/default/default.css',
                LibUrl: ''
            },
            Waves: {
                Selected: false,
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
    DomData.prototype.getLunch = function (date) {
        //Five categories: Main Dish, Action station, Soup, Salad Bar and Dessert.
        var styleList = {
            Waves: {
                StyleUrl: '../css/lunchContent/Waves.css',
                TemplateUrl: '../templates/lunchContent/waves.html',
                Selected: false
            },
            default: {
                StyleUrl: '../css/lunchContent/default.css',
                TemplateUrl: '../templates/lunchContent/default.html',
                Selected: true
            }
        };
        for (var style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle = styleList[style];
            }
        }
        return {
            selectedStyle: selectedStyle,
            date: date,
            lunchState: true,
            lunchSpecial: 'Lunch',
            lunch: {
                MD: ['BBQ Beef Sandwiches', 'Veggie burgers', 'Crispy Patatoes', 'steamed Sugar Snap Peas'],
                AS: ['Santa Fe Chiken & rice', 'Panini'],
                S: ['Corn Chowder'],
                SB: ['Chefs Salad'],
                D: ['Jello with whipped topping']
            }
        };
    };
    DomData.prototype.getMain = function () {
        var styleList = {
            Waves: {
                StyleUrl: '../css/mainContent/Waves.css',
                TemplateUrl: '../templates/mainContent/waves.html',
                Selected: false
            },
            default: {
                StyleUrl: '../css/mainContent/default.css',
                TemplateUrl: '../templates/mainContent/default.html',
                Selected: true
            }
        };
        for (var style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle = styleList[style];
            }
        }
        return { selectedStyle: selectedStyle };
    };
    DomData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DomData);
    return DomData;
}());
exports.DomData = DomData;
//# sourceMappingURL=mockdata.service.js.map