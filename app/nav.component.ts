import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import { Title } from '@angular/platform-browser';
import {DomData} from './mockdata.service'//Do not put two copies of the same service
import {NgFor} from '@angular/common'

var _navService = new DomData();
var styleUrl = _navService.getNav().selectedStyle.StyleUrl;

@Component({
    selector: 'my-navbar',
    template: ` <div class="navbar"><div *ngFor="let page of pages; let i = index"
                [ngClass]="{blur: blur[i], navbar_item: true, active: isActive[i]}" (click)="onSelect(i)" 
                (mouseenter)="mouseEnter(i)" (mouseleave)="mouseLeave(i)"><a [routerLink]="['{{page}}']">{{page}}</a></div></div>
                `,
                
    directives: [NgClass],
    styleUrls: [styleUrl],
    providers: [DomData]
})

export class NavComponent { 
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

