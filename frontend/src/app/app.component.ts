import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  constructor(private router: Router) {
  }
  onRouterClick() {
    this.router.navigate([ 'products/detail' ], { queryParams: { id: 1 } });
  }

}
