import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authType: string;
  public loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });
  public signupForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private authService: AuthService, private myRoute: Router) { }

  ngOnInit() {
    this.authType = this.route.snapshot.paramMap.get('type') || 'login';
  }

  loginSubmit() {
    this.authService.login(this.loginForm.value).subscribe( (res: any) => {
      localStorage.setItem('auth' , res);
      this.myRoute.navigate(['home']);
    });
  }


  signupSubmit() {
    this.authService.signup(this.signupForm.value).subscribe( (res: any) => {
      localStorage.setItem('auth' , res);
      this.myRoute.navigate(['home']);
    });
  }
  changeTab(tabName) {
    this.authType = tabName;
  }


}
