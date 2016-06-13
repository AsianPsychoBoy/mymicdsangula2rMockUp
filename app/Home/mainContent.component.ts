import {Component} from 'angular2/core';
import {DomData} from './mockdata.service';
import {MyProgress} from './progress.component'
//do logic to determine which page is selected, and get the correcponding content


@Component ({
    selector: 'app-content',
    templateUrl: '../templates/content/mainContent.html',
    styleUrls: ['../css/content/content.css'],
    directives: [MyProgress]
})

export class mainContent{}