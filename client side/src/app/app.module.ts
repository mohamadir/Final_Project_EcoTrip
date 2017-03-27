import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// import services
import {FoodCategoryService} from '../services/food-category-service';
import {FoodService} from '../services/food-service';
import {GatewayService} from '../services/gateway-service';
import {HotelService} from '../services/hotel-service';
import {RestaurantService} from '../services/restaurant-service';
import {ActivityService} from '../services/activity-service';
import {AttractionService} from '../services/attraction-service';
import {ContactService} from '../services/contact-service';
import {Trips} from '../providers/trips'
// end import services
// end import services

// import pages
import { ActivityPage} from '../pages/activity/activity';
import { AttractionDetailPage} from '../pages/attraction-detail/attraction-detail';
import { AttractionsPage} from '../pages/attractions/attractions';
import { AttractionSearchPage} from '../pages/attraction-search/attraction-search';
import { HomePage} from '../pages/home/home';
import { HotelDetailPage} from '../pages/hotel-detail/hotel-detail';
import { HotelsPage} from '../pages/hotels/hotels';
import { AboutUSPage} from '../pages/about-us/about-us';
import { MainTabsPage} from '../pages/main-tabs/main-tabs';
import { ModalFilterPage} from '../pages/modal-filter/modal-filter';
import { MyProfilePage} from '../pages/my-profile/my-profile';
import { RestaurantDetailPage} from '../pages/restaurant-detail/restaurant-detail';
import { RestaurantsPage} from '../pages/restaurants/restaurants';
import { SearchPage} from '../pages/search/search';
import { SearchResultsPage} from '../pages/search-results/search-results';
import { SettingPage} from '../pages/setting/setting';
import { WelcomePage} from '../pages/welcome/welcome';
import { GpsPage} from '../pages/gps/gps';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    AttractionSearchPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    MainTabsPage,
    GpsPage,
    ModalFilterPage,
    MyProfilePage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchResultsPage,
    SearchPage,
    SettingPage,
    WelcomePage,
	AboutUSPage
],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    AttractionSearchPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    GpsPage,
    AboutUSPage,
    MainTabsPage,
    ModalFilterPage,
    SearchResultsPage,    
    MyProfilePage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage
],
  providers: [
    FoodCategoryService,
    FoodService,
    GatewayService,
    Trips,
    HotelService,
    RestaurantService,

    
    ActivityService,
    AttractionService,
    ContactService
    /* import services */
]
})
export class AppModule {}
