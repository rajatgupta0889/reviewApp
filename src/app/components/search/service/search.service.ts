import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getCollections() {
    const url = '/api/getCollections';
    return this.http.get<any>(url).pipe(
      map((res: Response) => {
        const body = res;
        return of(body || {});
      })
    );
  }
  getCuisines() {
    const url = '/api/getCuisines';
    return this.http.get<any>(url).pipe(
      map((res: Response) => {
        const body = res;
        return of(body || {});
      })
    );
  }
  getCategories() {
    const url = '/api/getCategories';
    return this.http.get<any>(url).pipe(
      map((res: Response) => {
        const body = res;
        return of(body || {});
      })
    );
  }
  getRestaurants(data) {
    const url = '/api/searchRestaurants';
    return this.http.post<any>(url, data).pipe(
      map((res: Response) => {
        const body = res;
        return of(body || {});
      })
    );
  }

}
