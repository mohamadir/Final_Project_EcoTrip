import {Component} from "@angular/core";
import {App, NavController} from "ionic-angular";
import {GatewayService} from "../../services/gateway-service";
import {HotelService} from "../../services/hotel-service";
import {RestaurantService} from "../../services/restaurant-service";
import {AttractionService} from "../../services/attraction-service";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";
import {HotelDetailPage} from "../hotel-detail/hotel-detail";
import {RestaurantsPage} from "../restaurants/restaurants";
import {HotelsPage} from "../hotels/hotels";
import {AttractionsPage} from "../attractions/attractions";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // restaurants
  public restaurants: any;
  // hotels
  public hotels: any;
  // attractions
  public attractions: any;
	
  day;
  
  constructor(public app: App, public nav: NavController, public gatewayService: GatewayService,
              public hotelService: HotelService, public restaurantService: RestaurantService,
              public attractionService: AttractionService) {
    // set sample data
    this.restaurants = restaurantService.getAll();
    this.hotels = hotelService.getAll();
    this.attractions = attractionService.getAll();
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] =  "ראשון";
	weekday[1] = "שני";
	weekday[2] = "שלישי";
	weekday[3] = "רביעי";
	weekday[4] = "חמישי";
	weekday[5] = "שישי";
	weekday[6] = "שבת";

	this.day = weekday[d.getDay()];
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.app.getRootNav().push(RestaurantDetailPage, {id: id})
  }

  // view hotel detail
  viewHotel(id) {
    this.app.getRootNav().push(HotelDetailPage, {id: id})
  }

  // view attraction detail
  viewAttraction(id) {
    this.app.getRootNav().push(AttractionsPage, {id: id})
  }

  // view all restaurants
  viewAllRestaurants() {
    this.app.getRootNav().push(RestaurantsPage);
  }

  // view all hotels
  viewAllHotels() {
    this.app.getRootNav().push(HotelsPage);
  }

  // view all restaurants
  viewAllAttractions() {
    this.app.getRootNav().push(AttractionsPage);
  }
}
