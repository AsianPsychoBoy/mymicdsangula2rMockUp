import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {Component} from '@angular/core';
import {NavComponent} from './nav.component';
import {BgComponent} from './background.component'
import {mainContent} from './Home/mainContent.component'
import {DomData} from './mockdata.service';

@Component({
    selector: 'mymicds-app',
    template: ` <div class="app-container">
                    <my-bg></my-bg>
                    <my-navbar class="navbar">
                    </my-navbar>
                    <router-outlet></router-outlet>
                </div>`,
    directives: [NavComponent, BgComponent],
    providers: [DomData, ROUTER_PROVIDERS],
    styleUrls: ['./css/main.css']
})

export class AppComponent {
  
}