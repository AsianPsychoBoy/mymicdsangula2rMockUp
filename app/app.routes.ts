import { RouterConfig } from '@angular/router/config';
import {provideRouter} from '@angular/router/router_providers'
import {mainContent} from './Home/mainContent.component';

export const routes: RouterConfig = [
  { path: '/', component: mainContent },
  //{ path: '/lunch', component: lunchContent },
  //{ path: '/planner', component: plannerContent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];