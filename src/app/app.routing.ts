import { RouterModule, Routes } from '@angular/router';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
    data: { animation: 'landing-page' }
  },
  {
    path: 'profile-card',
    component: ProfileCardComponent,
    data: { animation: 'profile-card' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'contact',
    redirectTo: '/profiles'
  },
  {
    path: 'profiles',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  { path: '**', redirectTo: '/' }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES, {
  useHash: true
});
