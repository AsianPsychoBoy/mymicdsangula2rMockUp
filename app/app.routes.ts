import { RouterConfig } from '@angular/router';
import {provideRouter} from '@angular/router';
import {mainContent} from './Home/mainContent.component';
import {lunchContent} from './Lunch/lunchContent.component';
import {plannerContent} from './Planner/plannerContent.component';
import {profileContent} from './Profile/profileContent.component'
import {settingsContent} from './Settings/settingsContent.component'

export const routes: RouterConfig = [
  { path: '', component: mainContent },
  { path: 'Home', component: mainContent },
  { path: 'Lunch', component: lunchContent },
  { path: 'Planner', component: plannerContent },
  { path: 'Profile', component: profileContent },
  { path: 'Settings', component: settingsContent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];