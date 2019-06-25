import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ContactComponent } from './contact/contact.component';
import { SlideComponent } from './slide/slide.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSlideComponent,
    IntroduceComponent,
    CustomCardComponent,
    ContactComponent,
    SlideComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
