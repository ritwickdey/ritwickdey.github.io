import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    PortfolioComponent,
    DpLogoComponent,
    NavigatorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', component: ProfileComponent, pathMatch: 'full' },
        { path: 'portfolio', component: PortfolioComponent },
        { path: '**', redirectTo: '/' }
      ],
      { useHash: true }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
