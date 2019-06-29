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
contactAnimation
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