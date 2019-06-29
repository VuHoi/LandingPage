import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ContactComponent } from './contact/contact.component';
import { SlideComponent } from './slide/slide.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// thư viện của swaper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RegistrationComponent } from './registration/registration.component';
import { RoleComponent } from './role/role.component';
import { IntroduceDetailComponent } from './introduce-detail/introduce-detail.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AwardComponent } from './award/award.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  // direction: 'horizontal',
  // slidesPerView: 'auto'
  loop: true,
  direction: 'horizontal',
  threshold: 50,
  slidesPerView: 2,
  centeredSlides: false
};

@NgModule({
  declarations: [
    AppComponent,
    MainSlideComponent,
    IntroduceComponent,
    CustomCardComponent,
    ContactComponent,
    SlideComponent,
    CardComponent,
    RegistrationComponent,
    RoleComponent,
    IntroduceDetailComponent,
    AwardComponent,

  ],
  imports: [
    BrowserModule,
    SwiperModule,
    BrowserAnimationsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
