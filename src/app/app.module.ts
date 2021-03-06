
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TokenService } from './Services/token.service';
import { AuthService } from './Services/auth.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ServiceService } from './Services/service.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { BoardComponent } from './organisation/board/board.component';
import { MemberCountriesComponent } from './organisation/member-countries/member-countries.component';
import { RepresentativesComponent } from './organisation/representatives/representatives.component';
import { PastPresidentsComponent } from './history/past-presidents/past-presidents.component';
import { ComingSoonComponent } from './18PaunsCongress/coming-soon/coming-soon.component';
import { ObjectivesComponent } from './organisation/objectives/objectives.component';
import { PastBoardsComponent } from './history/past-boards/past-boards.component';
import { HistoryComponent } from './history/history/history.component';
import { PastCongressesComponent } from './Event/past-congresses/past-congresses.component';
import { PastMeetingsComponent } from './Event/past-meetings/past-meetings.component';
import { ContactComponent } from './contact/contact.component';
import { LinkComponent } from './link/link.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { UsersComponent } from './admin/users/users.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { EventsComponent } from './admin/events/events.component';
import { NewsComponent } from './admin/news/news.component';
import { PresentationComponent } from './admin/presentation/presentation.component';
import { EventementComponent } from './eventement/eventement.component';
import { NewspaperComponent } from './newspaper/newspaper.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdminComponent,
    RequestResetComponent,
    ResponseResetComponent,
    FooterComponent,
    BoardComponent,
    MemberCountriesComponent,
    RepresentativesComponent,
    PastPresidentsComponent,
    ComingSoonComponent,
    ObjectivesComponent,
    PastBoardsComponent,
    HistoryComponent,
    PastCongressesComponent,
    PastMeetingsComponent,
    ContactComponent,
    LinkComponent,
    UsersComponent,
    EventsComponent,
    NewsComponent,
    PresentationComponent,
    EventementComponent,
    NewspaperComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SnotifyModule,
    NgxIntlTelInputModule,
    MatSidenavModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ServiceService,TokenService,AuthService,AfterLoginService,BeforeLoginService,HttpClient,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],

  bootstrap: [AppComponent]
})
export class AppModule { }
