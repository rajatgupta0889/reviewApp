import { Component, OnInit } from '@angular/core';
import { RestaturantService } from './service/restaturant.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  public restaurantId: string;
  public restaurant: object;
  public reviews: any = [];
  public reviewContent: any;
  public ratings = [1,2,3,4,5];
  public userRating: any;

  constructor(private restaturantService: RestaturantService, private route: ActivatedRoute) {
    this.restaurantId = this.route.snapshot.paramMap.get('id');

  }
  ngOnInit() {
    this.restaturantService.getRestaurantDetails(this.restaurantId).subscribe( (res: any) => {
      this.restaurant = res.value;
      console.log((this.restaurant));
    });
    this.restaturantService.getRestaurantReviews(this.restaurantId).subscribe((res1: any) => {
      this.reviews = res1.value.reviews;
    });
  }


  submitReview() {
    console.log('reviewContent ::', this.reviewContent);
    console.log('review rate ::', this.userRating);
    let data = {};
    data.description =this.reviewContent;
    data.restaurantId = this.restaurant.id;
    data.name = this.restaurant.name;
    data.userRating = this.userRating;

    this.restaturantService.submitReview(data).subscribe((res: any) => {
      this.restaturantService.getRestaurantReviews(this.restaurant.id).subscribe((res1: any) => {
        this.reviews = res1.value.reviews;
      });
      console.log((this.restaurant));
    });
  }
}
