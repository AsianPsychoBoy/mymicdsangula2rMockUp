import { provideRouter, RouterConfig } from '@angular/router';
import {mainContent} from './Home/mainContent.component';

export const routes: RouterConfig = [
  { path: '/', component: mainContent },
  //{ path: '/lunch', component: lunchContent },
  //{ path: '/planner', component: plannerContent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];