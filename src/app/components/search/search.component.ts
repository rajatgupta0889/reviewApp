import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { SearchService } from './service/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  collections = new FormControl();
  collectionsList: object[];
  cuisines = new FormControl();
  cuisinesList: object[];
  establishments = new FormControl();
  establishmentsList: object[];
  restaurants: object[];
  selectedCollections: object[];
  selectedCuisines: object[];
  selectedEstablishments: object[];

  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
    this.searchService.getCategories().subscribe( (res: any) => {
      this.establishmentsList = res.value.establishments;
    });
    this.searchService.getCuisines().subscribe( (res: any) => {
      console.log(res.value)
      this.cuisinesList = res.value.cuisines;
    });
    this.searchService.getCollections().subscribe( (res: any) => {
      this.collectionsList = res.value.collections;
    });

    this.searchService.getRestaurants({params:'' }).subscribe((res: any) => {
      this.restaurants = res.value.restaurants;
    });
  }
  searchSubmit(searchStr) {
    let param = '';
    if (searchStr) {
      param = param + '&' + searchStr;
    }
    if ( this.selectedCuisines ) {
      let cusines = '';
      this.selectedCuisines.forEach(function(val, index) {
        if (!cusines) {
            cusines = val.cuisine.cuisine_id;
        } else {
          cusines = cusines + ',' + val.cuisine.cuisine_id;
        }
      });
      param = param + '&cuisines=' + cusines;
    }
    if ( this.selectedCollections ) {
      let collections = '';
      this.selectedCollections.forEach(function(val, index) {
        if (!collections) {
          collections = val.collection.collection_id;
        } else {
          collections = collections + ',' + val.collection.collection_id;
        }
      });
      param = param + '&collection_id=' + collections;
    }
    if ( this.selectedEstablishments ) {
      let establishments = '';
      this.selectedEstablishments.forEach(function(val, index) {
        if (!establishments) {
          establishments = val.establishment.id;
        } else {
          establishments =establishments + ',' + val.establishment.id;
        }
      });
      param = param + '&establishment_type=' + establishments;
    }
    this.searchService.getRestaurants({params: param }).subscribe((res: any) => {
      this.restaurants = res.value.restaurants;
    });

  }
}
