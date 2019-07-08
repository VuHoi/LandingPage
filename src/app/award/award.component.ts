import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInUp } from '../animation/common';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css'],
  animations: [
    trigger('slideInUpAnimation', [
      transition(':enter',
        [
          useAnimation(slideInUp)
        ])
    ])
  ]
})
export class AwardComponent implements OnInit {

  constructor() { }

  state1 = true;
  state2 = true;
  state3 = true;
  state4 = true;
  state5 = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log(window.scrollY);
    if (window.scrollY > 3100) {

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
