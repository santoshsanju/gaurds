import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable, catchError, delay, of } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class CartResolverService {
  constructor(private http: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log("resolve");
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      delay(5000),
      catchError(error => {
        return of('No data');
      })
    );
  }
}