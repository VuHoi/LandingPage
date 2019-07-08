import { animate, animation, style, keyframes } from '@angular/animations';
export const cardAnimation = animation(
    animate('500ms', keyframes([
        style({ transform: 'scale3d(1, 1, 1)' }),
        style({ transform: 'scale3d(0.98, 0.98, 0.98)' }),
        style({ transform: 'scale3d(0.95, 0.95, 0.95)' }),
        style({ transform: 'scale3d(0.92, 0.92, 0.92)' }),
        style({ transform: 'scale3d(0.9, 0.9, 0.9)' }),
        style({ transform: 'scale3d(0.92, 0.92, 0.92)' }),
        style({ transform: 'scale3d(0.95, 0.95, 0.95)' }),
        style({ transform: 'scale3d(0.98, 0.98, 0.98)' }),
        style({ transform: 'scale3d(1, 1, 1)' }),

    ]))
);

export const contactAnimation = animation(
    animate('3s', keyframes([
        style({ backgroundColor: '#45A349', opacity: 1 }),
        style({ backgroundColor: '#45A349', opacity: 0.9 }),
        style({ backgroundColor: '#45A349', opacity: 0.8 }),
        style({ backgroundColor: '#45A349', opacity: 0.7 }),
        style({ backgroundColor: '#45A349', opacity: 0.6 }),
        style({ backgroundColor: '#45A349', opacity: 0.7 }),
        style({ backgroundColor: '#45A349', opacity: 0.8 }),
        style({ backgroundColor: '#45A349', opacity: 0.9 }),
        style({ backgroundColor: '#45A349', opacity: 1 }),


    ]))
);
export const swingAnimation = animation(
    animate('2s', keyframes([

        style({ transform: 'rotate3d(0, 0, 1, -5deg)' }),
        style({ transform: 'rotate3d(0, 0, 1, 5deg)' }),
        style({ transform: 'rotate3d(0, 0, 1, -10deg)' }),
        style({ transform: 'rotate3d(0, 0, 1, 15deg)' }),
        style({ transform: 'rotate3d(0, 0, 1, -10deg)' }),
        style({ transform: 'rotate3d(0, 0, 1, 5deg)' }),
        style({ transform: 'rotate3d(0, 0, 1, -5deg)' }),
    ]))
)

export const bounceInUp = animation(
    animate('60s ease-in', keyframes([
        style({ opacity: 0, transform: 'translate3d (0, 0, 0)', offset: 0 }),
        style({
            transform: 'translate3d(0, -100px, 0)', offset: 0.3
        }),
        style({
            transform: 'translate3d(0, 50px, 0)', offset: 0.4
        }),
        style({
            transform: 'translate3d(0, -25px, 0)', offset: 0.5
        }),
        style({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
        style({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),


    ]))
)

export const slideInUp = animation(
    animate('2s ease-in', keyframes([
        style({ transform: 'translate3d(0, 10%, 0)', visibility: 'visible' }),
        style({ transform: 'translate3d(0, 0, 0)' })


    ]))
)

