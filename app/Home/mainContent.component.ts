import {Component} from '@angular/core';
import {MyProgress} from './progress.component'


@Component ({
    selector: 'app-content',
    templateUrl: '../templates/mainContent/mainContent.html',
    styleUrls: ['../css/mainContent/mainContent.css'],
    directives: [MyProgress]
})

export class mainContent{}
