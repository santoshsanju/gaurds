import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => console.log("constructor", data));
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => console.log(data));
  }

}
