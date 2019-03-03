import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    const url = '/api/user/login';
    return this.http.post<any>(url, data).pipe(
      map((res: Response) => {
        const body = res;
        return body || {};
      })
    );
  }
  signup(data) {
    const url = '/api/user/signup';
    return this.http.post<any>(url, data).pipe(
      map((res: Response) => {
        const body = res;
        return body || {};
      })
    );
  }
}
