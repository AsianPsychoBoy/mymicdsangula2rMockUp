import {ROUTER_DIRECTIVES} from '@angular/router';
import {Component} from '@angular/core';
//import {NavComponent} from './nav.component';
import {BgComponent} from './background.component'
import {mainContent} from './Home/mainContent.component'
import {DomData} from './mockdata.service';
import {NgClass} from '@angular/common';
import { Title } from '@angular/platform-browser';
import {NgFor} from '@angular/common';
import {Router} from '@angular/router'

var _navService = new DomData();
var styleUrl = _navService.getNav().selectedStyle.StyleUrl;
var templateUrl = _navService.getNav().selectedStyle.TemplateUrl;

@Component({
    selector: 'mymicds-app',
    templateUrl: templateUrl,
    directives: [BgComponent, NgClass, ROUTER_DIRECTIVES],
    providers: [DomData],
    styleUrls: ['./css/main.css', styleUrl]
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
    
    public constructor(private _titleService: Title, private _DomService: DomData, private router:Router) { }
    public pages = this._DomService.getNav().navTitles
  //emit events to alert the other components to render the app
    
    public selectedPage = 'Home'
    public onSelect(x: number):void {
        this.restore(x);
        this.magnify(x);
        this.selectedPage = this._DomService.getNav().navTitles[x];
        const p: Promise<string> = new Promise (
        (resolve: (str: string)=>void, reject: (str: string)=>void) => {
            document.getElementById("my-fadeout").className += "fade-out";
            setTimeout(() => {resolve('')}, 400)
        }
        );
        if (this.pages[x] != 'Home') {
            p.then(() => {
                this.router.navigate(['/' + this.pages[x]]);
                this._titleService.setTitle("MockUp-"+this._DomService.getNav().navTitles[x]);
            });
        } else {
            this.router.navigate(['/' + this.pages[x]]);
            this._titleService.setTitle("MockUp-"+this._DomService.getNav().navTitles[x]);
        }
    }
}