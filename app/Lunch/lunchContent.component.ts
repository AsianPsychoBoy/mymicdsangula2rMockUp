import {Component} from '@angular/core';
import {DomData} from '../mockdata.service';

var d = new Date();
var date = {
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate()
    };

@Component ({
    selector: 'app-content',
    templateUrl: '../templates/lunchContent/lunchContent.html',
    styleUrls: ['../css/lunchContent/lunchContent.css'],
    directives: [],
    providers: [DomData]
})

export class lunchContent{
    public date = {
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate()
    };
    public lunchSpecial;
    public lunchState;
    public lunch;
    constructor (private dataService:DomData) {
        var lunchObj = dataService.getLunch(this.date);
        this.lunchSpecial = lunchObj.lunchSpecial;
        this.lunchState = lunchObj.lunchState;
        this.lunch = lunchObj.lunch
    };
    private bubbleClick:boolean[] = [false, false, false, false, false];
    private moveDirection = [0, 0, 0, 0, 0];
    public onClickBubble(x) {
        for (let i=0; i<=4; i++) {this.bubbleClick[i] = false};
        this.bubbleClick[x] = !this.bubbleClick[x];
        for (let i=0; i<=4; i++) {this.moveDirection[i] = 0};
        this.moveDirection[x] = -1;
        console.log(this.moveDirection);
        for (let i=x+1; i<=4; i++) {this.moveDirection[i] = 1};
    }
    public setStyles(x) {
    let styles = {
        animation: this.bubbleClick[x] ? '0.4s ease 0s 1 normal forwards running magnify' : '0.4s ease 0s 1 reverse backwards running magnify',
        transform: this.moveDirection[x] == -1 ? 'translate(0)' : this.moveDirection[x] == 1 ? 'translate(400)' : 'translate(-400)',
        }
    return styles;
    }
}