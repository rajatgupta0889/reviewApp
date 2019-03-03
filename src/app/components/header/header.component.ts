import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public auth : string;
  constructor(private myRoute: Router) { }

  ngOnInit() {
    this.myRoute.events.subscribe((val) =>
    { this.auth = localStorage.getItem('auth'); });

  }
  logout() {
    localStorage.clear();
    this.myRoute.navigate(['']);
  }

}
