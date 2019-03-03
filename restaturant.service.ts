import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaturantService {

  constructor(private http: HttpClient) { }

  getRestaurantDetails(id) {
    const url = '/api/getRestaurant/' + id;
    return this.http.get<any>(url).pipe(
      map((res: Response) => {
        const body = res;
        return of(body || {});
      })
    );
  }

  submitReview(data) {
    const url = '/api/addReview';
    return this.http.post<any>(url, data).pipe(
      map((res: Response) => {
        const body = res;
        return of(body || {});
      })
    );
  }
  getRestaurantReviews(id) {
    const url = '/api/getReviews/' + id;
    return this.http.get<any>(url).pipe(
      map((res: Response) => {
        const body = res;
        return of(body || {});
      })
    );
  }
}
