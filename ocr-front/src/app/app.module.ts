import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroSerctionComponent } from './hero-serction/hero-serction.component';
import { QnaComponent } from './qna/qna.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { FooterComponent } from './footer/footer.component';
import { ScannerComponent } from './scanner/scanner.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroSerctionComponent,
    QnaComponent,
    OurTeamComponent,
    FooterComponent,
    ScannerComponent,
    PricingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
