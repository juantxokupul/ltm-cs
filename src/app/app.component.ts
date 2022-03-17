import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './route-animations';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [ slider ]
})
export class AppComponent  {
  name = 'Angular';

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.['animation'];
  }
}
