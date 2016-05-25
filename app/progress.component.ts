import {Component} from 'angular2/core'
import {DomData} from './mockdata.service'

@Component ({
    selector: 'my-progress',
    templateUrl: '../templates/content/progress.html',
    styleUrls: ['../css/content/progress.css'],
    providers: [DomData]
})

export class MyProgress {
    public constructor(private _DomService: DomData) {}
}