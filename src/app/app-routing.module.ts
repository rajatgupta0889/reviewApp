import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { SearchComponent } from './components/search/search.component';
import {AuthGuard} from './services/auth.guard';
const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth/:type', component: AuthComponent },
  { path: 'home', canActivate: [AuthGuard], component: SearchComponent },
  { path: 'restaurant/:id', canActivate: [AuthGuard], component: RestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
