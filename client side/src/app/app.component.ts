import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

// import pages
import {WelcomePage} from '../pages/welcome/welcome';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {SettingPage} from '../pages/setting/setting';
import {FindFriendPage} from '../pages/find-friend/find-friend';
import {HotelsPage} from '../pages/hotels/hotels';
import {RestaurantsPage} from '../pages/restaurants/restaurants';
import {AttractionsPage} from '../pages/attractions/attractions';
import {AboutUSPage} from '../pages/about-us/about-us';

// end import pages

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public pages = [
    {
      title: 'בית',
      count: 0,
	  icont: 'home',
      component: MainTabsPage
    },

    {
      title: 'חיפוש מסלול',
      count: 0,
	  icont: 'git-merge',
      component: FindFriendPage
    },

    {
      title: 'מלונות בארץ',
      count: 0,
	  icont: 'paper-plane',
      component: HotelsPage
    },

    {
      title: 'מסעדות',
      count: 0,
	  icont: 'pizza',
      component: RestaurantsPage
    },

    {
      title: 'אטרקציות',
      count: 0,
	  icont: 'bicycle',
      component: AttractionsPage
    },

    {
      title: 'הגדרות',
      count: 0,
	  icont: 'settings',
      component: SettingPage
    },

    {
      title: 'אודות',
      count: 0,
	  icont: 'information-circle',
      component: AboutUSPage
    }


    // import menu


  ];

  constructor(public platform: Platform) {
    this.rootPage = WelcomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
