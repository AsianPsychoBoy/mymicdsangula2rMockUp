import {Injectable} from 'angular2/core';

@Injectable()
export class DomData {
    public navTitles:string[] = ["Home", "Lunch", "Planner", "Styles", "Poopyface"] //this is supposed to get data from somewhere
    public getPlanner() {
        //use http to get planner info
    }
    
    public getweather() {}
    public getProgress() {}
    public getClasses() {}
}
