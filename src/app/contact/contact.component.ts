import { Component, OnInit } from '@angular/core';
import { trigger, useAnimation, transition } from '@angular/animations';
import { swingAnimation, contactAnimation } from '../animation/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger("contact1", [
      transition('* => loop-state1',
        useAnimation(contactAnimation)
      ),
      transition('loop-sate1 => start-state1',
        [
        ]
      )
    ]),
    trigger("contact2", [
      transition('* => loop-state2',
        useAnimation(contactAnimation)
      ),
      transition('loop-sate2 => start-state2',
        [
        ]
      )
    ]),
    trigger("contact3", [
      transition('* => loop-state3',
        useAnimation(contactAnimation)
      ),
      transition('loop-sate3 => start-state3',
        [
        ]
      )
    ]),

  ]
})
export class ContactComponent implements OnInit {

  constructor() { }
  state1: string = "loop-state1";
  state2: string = "loop-state2";
  state3: string = "loop-state3";
  onAnimationStarted1(event: AnimationEvent) {

  }
  onAnimationDoned1(event: AnimationEvent) {
    setTimeout(() => {
      this.state1 === 'start-state1' ? this.state1 = 'loop-state1' : this.state1 = 'start-state1';
    }, 1)
  }

  onAnimationStarted2(event: AnimationEvent) {

  }
  onAnimationDoned2(event: AnimationEvent) {
    setTimeout(() => {
      this.state2 === 'start-state2' ? this.state2 = 'loop-state2' : this.state2 = 'start-state2';
    }, 1)
  }

  onAnimationStarted3(event: AnimationEvent) {

  }
  onAnimationDoned3(event: AnimationEvent) {
    setTimeout(() => {
      this.state3 === 'start-state3' ? this.state3 = 'loop-state3' : this.state3 = 'start-state3';
    }, 1)
  }
  ngOnInit() {
  }

}
