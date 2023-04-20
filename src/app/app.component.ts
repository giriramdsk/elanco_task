import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showHomeButton: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url.includes('/applications') || event.url.includes('/resources')) {
          this.showHomeButton = false;
        } else {
          this.showHomeButton = true;
        }
      }
    });
  }
}
