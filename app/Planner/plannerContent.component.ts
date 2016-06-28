import {Component} from '@angular/core';
import {DomData} from '../mockdata.service'

var _navService = new DomData();
var styleUrl = _navService.getMain().selectedStyle.StyleUrl;
var templateUrl = _navService.getMain().selectedStyle.TemplateUrl;


@Component ({
    selector: 'app-content',
    templateUrl: templateUrl,
    styleUrls: [styleUrl]
})

export class plannerContent{}