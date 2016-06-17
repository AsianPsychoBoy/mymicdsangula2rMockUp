import {Component} from '@angular/core';
import {DomData} from '../mockdata.service';
import {MyProgress} from '../progress.component'


@Component ({
    selector: 'app-content',
    templateUrl: '../templates/content/mainContent.html',
    styleUrls: ['../css/content/content.css'],
    directives: [MyProgress]
})

export class mainContent{}