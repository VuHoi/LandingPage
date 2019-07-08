import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, useAnimation, transition } from '@angular/animations';
import { bounceInUp, cardAnimation, slideInUp } from '../animation/common';

@Component({
  selector: 'app-introduce-detail',
  templateUrl: './introduce-detail.component.html',
  styleUrls: ['./introduce-detail.component.css'],
  animations: [
    trigger('BoundUp', [
      transition(':enter', [
        useAnimation(slideInUp)
      ])
    ]),
  ]
})
export class IntroduceDetailComponent implements OnInit {

  constructor() { }
  state1 = true;
  state2 = true;
  state3 = true;
  state4 = true;
  state5 = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 1300) {

      setTimeout(() => {
        if (!this.state1)
          this.state1 = true;
        setTimeout(() => {
          if (!this.state2)
            this.state2 = true;

          setTimeout(() => {
            if (!this.state3)
              this.state3 = true;

            setTimeout(() => {
              if (!this.state4)
                this.state4 = true;

              setTimeout(() => {
                if (!this.state5)
                  this.state5 = true;

              }, 250)

            }, 200)
          }, 150)
        }, 100)
      }, 50)

    }

  }
  ngOnInit() {
  }

}
