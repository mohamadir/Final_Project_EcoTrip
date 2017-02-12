import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {RestaurantService} from "../../services/restaurant-service";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";


@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html'
})
export class RestaurantsPage {
  // list of restaurants
  public restaurants;

  constructor(public nav: NavController, public restaurantService: RestaurantService) {
    this.restaurants = restaurantService.getAll();
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.nav.push(RestaurantDetailPage, {id: id})
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}
