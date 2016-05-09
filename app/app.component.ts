import {Component} from 'angular2/core';
import {NavComponent} from './nav.component';
import {BgComponent} from './background.component'
import {ContentComponent} from './content.component'

@Component({
    selector: 'mymicds-app',
    template: ` <div class="app-container">
                    <my-bg></my-bg>
                    <my-navbar class="navbar">
                    </my-navbar>
                    <app-content></app-content>
                </div>`,
    directives: [NavComponent, BgComponent, ContentComponent],
    styleUrls: ['./css/main.css']
})

export class AppComponent {
  
}