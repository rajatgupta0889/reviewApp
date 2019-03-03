import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private myRoute: Router) {
  }

  canActivate() {
      const authenticated = localStorage.getItem('auth');
      if (authenticated) {
        return true;
      } else {
        this.myRoute.navigate(['auth/login']);
        return false;
      }
  }
}
