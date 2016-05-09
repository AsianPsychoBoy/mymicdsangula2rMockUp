import {Component} from 'angular2/core';
import {DomData} from './mockdata.service';
import { Title } from 'angular2/platform/browser';
import {NavComponent} from './nav.component';
var _titleService = new Title;
var _dataService = new DomData;
//do logic to determine which page is selected, and get the correcponding content
var NavData = new NavComponent(_titleService, _dataService);
var templateUrl = _dataService.getContent(NavData.selectedPage).templateUrl;

@Component ({
    selector: 'app-content',
    templateUrl: templateUrl
})

export class ContentComponent{}