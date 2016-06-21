import { RouterConfig } from '@angular/router';
import {provideRouter} from '@angular/router'
import {mainContent} from './Home/mainContent.component';

export const routes: RouterConfig = [
  { path: '', component: mainContent },
  { path: 'Home', component: mainContent },
  //{ path: 'Lunch', component: lunchContent },
  //{ path: 'Planner', component: plannerContent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];