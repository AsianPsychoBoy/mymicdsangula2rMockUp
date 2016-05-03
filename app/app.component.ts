import {Component} from 'angular2/core';
import {NavComponent} from './nav.component';

@Component({
    selector: 'mymicds-app',
    template: ` <div class="container">
                    <my-bg></my-bg>
                    <my-navbar class="navbar">
                    </my-navbar>
                    <div id="main_panel"></div>
                </div>`,
    directives: [NavComponent],
    styleUrls: ['./css/main.css'],
})

export class AppComponent {
  
}