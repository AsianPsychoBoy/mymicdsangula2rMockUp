import {Component} from 'angular2/core'
import {DomData} from './mockdata.service'

var _DomService=new DomData, p=0;
    setInterval(function () {
        console.log(_DomService.getProgress().overall_percentage);
        p=_DomService.getProgress().overall_percentage/100*(780-20)+20;
    }, 1000);
    console.log(p)

@Component ({
    selector: 'my-progress',
    templateUrl: '../templates/content/progress.html',
    styleUrls: ['../css/content/progress.css'],
    providers: [DomData]
})

export class MyProgress {
    public percentage:Number;
    public constructor(private _DomService: DomData) {
        this.percentage = p;
        console.log(this.percentage);
    };
}