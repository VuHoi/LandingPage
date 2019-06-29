import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  useAnimation,
  // ...
} from '@angular/animations';
import { cardAnimation } from '../animation/common';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
  animations: [

    trigger('Animationbtn1', [

      transition('loop-state-btn1 => start-state-btn1', [
      ]),
      transition('* => loop-state-btn1', [
        useAnimation(cardAnimation)
      ]),

    ]),

    trigger('Animationbtn2', [
      transition('loop-state-btn2 => start-state-btn2', [
      ]),
      transition('* => loop-state-btn2', [
        useAnimation(cardAnimation)
      ]),

    ]),

  ]
})
export class CustomCardComponent implements OnInit {

  constructor() {

  }

  statebtn1: string = "loop-state-btn1";
  statebtn2: string = "loop-state-btn2";

  onAnimationEvent($event) {
    setTimeout(() => {
      this.statebtn1 = "loop-state"
    }, 1);

  }
  // setTimeout(() => {
  //   this.state = "loop-state"
  // }, 0);

  onAnimationStartedbtn1(event: AnimationEvent): void {
    // console.log(event);


  }
  onAnimationDonebtn1(event: AnimationEvent): void {


    setTimeout(() => {
      console.log(event);
      console.log(this.statebtn1);
      this.statebtn1 === 'start-state-btn1' ? this.statebtn1 = 'loop-state-btn1' : this.statebtn1 = 'start-state-btn1';

    }, 1);

    // setTimeout(() => {
    //   this.state = "loop-state"
    // }, 0);
  }

  onAnimationStartedbtn2(event: AnimationEvent): void {
    // console.log(event);


  }
  onAnimationDonebtn2(event: AnimationEvent): void {


    setTimeout(() => {
      console.log(event);
      console.log(this.statebtn2);
      this.statebtn2 === 'start-state-btn2' ? this.statebtn2 = 'loop-state-btn2' : this.statebtn2 = 'start-state-btn2';

    }, 0);

    // setTimeout(() => {
    //   this.state = "loop-state"
    // }, 0);
  }
  ngOnInit() {
    this.statebtn1 = "loop-state-btn1";
    this.statebtn2 = "loop-state-btn2";
  }

}
