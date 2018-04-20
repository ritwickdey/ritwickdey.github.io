import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  animateChild,
  style,
  group,
  animate,
  sequence
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        query(':enter', style({ transform: 'translateX(100%)', opacity: 0 }), {
          optional: true
        }),
        sequence([
          group([
            query('@*, :leave', [animateChild()], { optional: true }),
            query(
              ':leave',
              [
                style({ transform: 'translateX(0%)' }),
                animate(
                  '0.8s ease-in-out',
                  style({ transform: 'translateX(-100%)', opacity: 0 })
                )
              ],
              { optional: true }
            ),
            query(
              ':enter',
              [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate(
                  '0.8s ease-in-out',
                  style({ transform: 'translateX(0%)', opacity: 1 })
                )
              ],
              { optional: true }
            ),
            query('@*, :enter', [animateChild()], { optional: true })
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }
}
