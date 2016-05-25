import {Injectable} from 'angular2/core';

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
        return {
            A: "Math",
            A_percentage: "100",
            B: "English",
            B_percentage: "100",
            C: "Science",
            C_percentage: "100",
            D: "History",
            D_percentage: "100",
            E: "World Language",
            E_percentage: "70",
            F: "Choir",
            F_percentage: "0",
            G: "Free",
            G_percentage: "0"
        }
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
    public getContent(page: string) {
        if (page=="Home") {
            return {
                templateUrl: '../templates/content/content.html'
            }
        }
        if (page=="Planner") {
            return
        }
    }
}
