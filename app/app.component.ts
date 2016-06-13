import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router-depricated';
import {Component} from 'angular2/core';
import {NavComponent} from './nav.component';
import {BgComponent} from './background.component'
import {mainContent} from './Home/mainContent.component'

@Component({
    selector: 'mymicds-app',
    template: ` <div class="app-container">
                    <my-bg></my-bg>
                    <my-navbar class="navbar">
                    </my-navbar>
                </div>`,
    directives: [NavComponent, BgComponent],
    styleUrls: ['./css/main.css']
})

export class AppComponent {
  
}