import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  config: SwiperConfigInterface = {
    // a11y: true,
    // direction: 'horizontal',
    slidesPerView: 2,
    loop: true,
    // freeMode: true,
    // keyboard: true,
    // mousewheel: true,
    // scrollbar: false,
    //  navigation: true,
    //pagination: false,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },




  }

  constructor() { }

  ngOnInit() {
  }

}
