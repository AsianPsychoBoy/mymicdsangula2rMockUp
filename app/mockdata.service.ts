import {Injectable} from '@angular/core';

interface styleItem  {
    StyleUrl: string, TemplateUrl: string, Selected: boolean
} 

interface styleList {
    [key: string]: styleItem
} 

interface bgStyleListItem {
    StyleUrl: string, HTMLUrl: string, Selected: boolean, JSUrl: string, LibUrl: string
}

interface bgStyleList {
    [key: string]: bgStyleListItem
} 

@Injectable()
export class DomData {
    public getNav() {
        var styleList: styleList = {
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
        }
        for (let style in styleList) {
                if (styleList[style].Selected) {
                    var selectedStyle: styleItem = styleList[style]
                } 
            }
        return {
            navTitles: ["Home", "Lunch", "Planner", "Settings", "Profile"], //this is supposed to get data from somewhere
            selectedStyle
        }
    }
    public getPlanner() {
        var styleList:styleList = {
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
        }
        for (let style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle: styleItem = styleList[style]
            } 
        }

         return {selectedStyle}
    }

    public getweather() {}
    public getProgress() {
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
            overall_percentage:75,
            current_class: "E",
            current_percentage: 70
        }
        return classData
    }    
    //Background services
    public getBg() {
        var bgList: bgStyleList = {//Mock Data
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
        }
            var selectedBg;
            Object.getOwnPropertyNames(bgList).forEach(function(val, idx, array) {
                if (bgList[val].Selected) {
                    selectedBg = bgList[val];
                }
            })   
            return selectedBg
    }

    public getLunch(date:{year: number, month: number, day: number}) {
        //Five categories: Main Dish, Action station, Soup, Salad Bar and Dessert.
        var styleList:styleList = {
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
        }
        for (let style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle: styleItem = styleList[style]
            } 
        }
        return {
            selectedStyle,
            date: date,
            lunchState: true,
            lunchSpecial: 'Lunch', //Traveling flavors
            lunch: {
                MD: ['BBQ Beef Sandwiches', 'Veggie burgers', 'Crispy Patatoes', 'steamed Sugar Snap Peas'],
                AS: ['Santa Fe Chiken & rice', 'Panini'],
                S: ['Corn Chowder'],
                SB: ['Chefs Salad'],
                D: ['Jello with whipped topping']
            }
        }
            
    }

    public getMain() {
        var styleList:styleList = {
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
        }
        for (let style in styleList) {
            if (styleList[style].Selected) {
                var selectedStyle: styleItem = styleList[style]
            } 
        }

         return {selectedStyle}
    }
}
