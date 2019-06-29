import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { cardAnimation, swingAnimation } from '../animation/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [
    trigger('Animationbtn', [

      transition('loop-state-btn => start-state-btn', [
      ]),
      transition('* => loop-state-btn', [
        useAnimation(cardAnimation)
      ]),
    ]),
    trigger('AnimationRegistration', [

      transition('loop-state-reg => start-state-reg', [
      ]),
      transition('* => loop-state-reg', [
        useAnimation(swingAnimation)
      ]),
    ]),
  ]
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  statebtn: string = "loop-state-btn";
  statereg: string = "loop-state-reg";
  onAnimationStartedbtn(event: AnimationEvent): void {
    // console.log(event);


  }
  onAnimationDonebtn(event: AnimationEvent): void {

    setTimeout(() => {
      this.statebtn === 'start-state-btn' ? this.statebtn = 'loop-state-btn' : this.statebtn = 'start-state-btn';
    }, 1);
  }

  onAnimationStartedreg(event: AnimationEvent): void {
    // console.log(event);
  }
  onAnimationDonereg(event: AnimationEvent): void {

    setTimeout(() => {
      this.statereg === 'start-state-reg' ? this.statereg = 'loop-state-reg' : this.statereg = 'start-state-reg';
    }, 1);
  }

  ngOnInit() {
    this.statebtn = "loop-state-btn";
  }

}
