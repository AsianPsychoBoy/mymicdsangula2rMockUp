import {Component} from '@angular/core';
import {MyProgress} from './progress/progress.component'
import {DomData} from '../mockdata.service'

var _navService = new DomData();
var styleUrl = _navService.getMain().selectedStyle.StyleUrl;
var templateUrl = _navService.getMain().selectedStyle.TemplateUrl;

@Component ({
    selector: 'app-content',
    templateUrl: templateUrl,
    styleUrls: [styleUrl],
    directives: [MyProgress]
})

export class mainContent{
    public percentage: number;
    public current_class: string;
    public current_percentage: number;
    public rotation_day: number;
    public constructor(private _DomService: DomData) {
        this.percentage = _DomService.getProgress().classData.overall_percentage;
        this.current_class = _DomService.getProgress().classData.current_class;
        this.current_percentage = _DomService.getProgress().classData.current_percentage;
    };
}
