import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LadingPageComponent } from './Components/lading-page/lading-page.component';
import { FooterComponent } from './Components/footer/footer.component';
// import { LandingPageComponent } from './Components/landing-page/landing-page.component';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LadingPageComponent,
    FooterComponent,
    // LandingPageComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
