import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [    
        query(':enter, :leave', style({ position: 'fixed' })),
        group([ 
          query(':enter', [
            style({ margin: '0 0 0 100vw' }),
            animate('0.9s ease-in-out', style({ margin: '0vw' }))
          ]),
          query(':leave', [
            style({ transform: '0 vw' }),
            animate('0.5s ease-in-out', style({ margin: '0 0 0 100vw' }))]),
        ])
      ])
    ])
   ],
})

export class AppComponent {
  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }
}
