import {Injectable} from '@angular/core';

@Injectable()
export class DomData {
    public getNav() {
        var styleList = {
            Wriggle: {//mockdata
                StyleUrl: '../css/navbar/Wriggle.css',
                Selected: false,
            },
            Waves: {
                StyleUrl: '../css/navbar/Waves.css',
                Selected:true
            }
        }
        for (let style in styleList) {
                if (styleList[style].Selected) {
                    var selectedStyle = styleList[style]
                } 
            }
        return {
            navTitles: ["Home", "Lunch", "Planner", "Styles", "Poopyface"], //this is supposed to get data from somewhere
            selectedStyle
        }
    }
    public getPlanner() {
        //use http to get planner info 
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
    public getClasses() {
        
    }
    //Background services
    public getBg() {
        var bgList = {//Mock Data
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
        return {
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
}
