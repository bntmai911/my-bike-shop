import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bike-shop';

  constructor(public router: Router) {

  }

  navigateToPage(path: string) {
    this.router.navigateByUrl(path);
  }
}
