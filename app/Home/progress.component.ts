import {Component} from '@angular/core'
import {DomData} from '../mockdata.service'

    @Component ({
        selector: 'my-progress',
        templateUrl: '../templates/mainContent/progress.html',
        styleUrls: ['../css/mainContent/progress.css'],
        providers: [DomData]
    })

    export class MyProgress {
        public percentage:Number;
        public constructor(private _DomService: DomData) {
            this.percentage = _DomService.getProgress().overall_percentage;
        };
    }
