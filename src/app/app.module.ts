import { TagsService } from './services/tags.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { EscCancelationDirective } from './directives/esc-cancelation.directive';
import { CrossIconComponent } from './ui/cross-icon/cross-icon.component';
import { BackIconComponent } from './ui/back-icon/back-icon.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { TypingComponent } from './typing/typing.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { appRouting } from './app.routing';
import { NoEmojiPipe } from './pipes/no-emoji.pipe';
import { SkillsService } from './services/skills.service';

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
    ProjectsComponent,
    ProjectDetailsComponent,
    EscCancelationDirective,
    CrossIconComponent,
    BackIconComponent,
    ContactComponent,
    AboutComponent,
    MaxLengthPipe,
    TypingComponent,
    LandingPageComponent,
    NoEmojiPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRouting
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: environment.production
    // })
  ],
  providers: [
    ProjectDataService,
    TagsService,
    SkillsService,
    { provide: APP_BASE_HREF, useValue: '!' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
