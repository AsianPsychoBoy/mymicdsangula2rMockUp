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
    DomData.prototype.getProgress = function () {
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
            current_percentage: 70
        };
        return classData;
    };
    DomData.prototype.getClasses = function () {
    };
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
    DomData.prototype.getLunch = function (date) {
        //Five categories: Main Dish, Action station, Soup, Salad Bar and Dessert.
        return {
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
    DomData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DomData);
    return DomData;
}());
exports.DomData = DomData;
//# sourceMappingURL=mockdata.service.js.map