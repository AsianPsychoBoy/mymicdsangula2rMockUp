import {ROUTER_DIRECTIVES} from '@angular/router';
import {Component} from '@angular/core';
//import {NavComponent} from './nav.component';
import {BgComponent} from './background.component'
import {mainContent} from './Home/mainContent.component'
import {DomData} from './mockdata.service';
import {NgClass} from '@angular/common';
import { Title } from '@angular/platform-browser';
import {NgFor} from '@angular/common';

var _navService = new DomData();
var styleUrl = _navService.getNav().selectedStyle.StyleUrl;
var templateUrl = _navService.getNav().selectedStyle.TemplateUrl;

@Component({
    selector: 'mymicds-app',
    templateUrl: templateUrl,
    directives: [BgComponent, NgClass, ROUTER_DIRECTIVES],
    providers: [DomData],
    styleUrls: ['./css/bootstrap.min.css', './css/main.css', styleUrl]
})

export class AppComponent {
  private restore(x):void {
        for (var i=0;i<this.isActive.length;i++) {
                this.isActive[i] = false;
        }
    }
    
    private magnify(x):void {
        this.restore(x);
        this.isActive[x]=true;
    }
    
    private applyBlur(x):void {
        for (var i=0;i<this.blur.length;i++) {
            if (i!=x) {
                this.blur[i] = true;
            }
        }
    }
    private removeBlur(x):void {
        for (var i=0;i<this.blur.length;i++) {
                this.blur[i] = false;
        }
    }
    
    private mouseEnter(x){
        this.applyBlur(x);
    }
    
    private mouseLeave(x){
        this.removeBlur(x);
    }
    private blur:boolean[] = [false,false,false,false,false]
    private isActive:boolean[] = [true,false,false,false,false]
    
    public constructor(private _titleService: Title, private _DomService: DomData) { }
    public pages = this._DomService.getNav().navTitles
  //emit events to alert the other components to render the app
    
    public selectedPage = 'Home'
    public onSelect(x):void {
        this.restore(x);
        this.magnify(x);
        this._titleService.setTitle("MockUp-"+this._DomService.getNav().navTitles[x]);
        this.selectedPage = this._DomService.getNav().navTitles[x];
    }
}