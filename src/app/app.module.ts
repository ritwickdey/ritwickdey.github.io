import { TagsService } from './services/tags.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ProfileComponent } from './profile/profile.component';
import { KeySkillBtnsComponent } from './key-skill-btns/key-skill-btns.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDataService } from './services/project-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    PortfolioComponent,
    DpLogoComponent,
    NavigatorComponent,
    ProfileComponent,
    KeySkillBtnsComponent,
    ProjectCardComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: ProfileComponent,
          pathMatch: 'full',
          data: { animation: 'home' }
        },
        {
          path: 'portfolio',
          component: PortfolioComponent,
          data: { animation: 'portfolio' }
        },
        { path: '**', redirectTo: '/' }
      ],
      { useHash: true }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    ProjectDataService,
    TagsService,
    {provide: APP_BASE_HREF, useValue: '!'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
