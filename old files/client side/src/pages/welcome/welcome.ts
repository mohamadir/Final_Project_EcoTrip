import {Component} from "@angular/core";
import {NavController, MenuController} from "ionic-angular";
import {MainTabsPage} from "../main-tabs/main-tabs";



@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public nav: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

  // go to home page
  goHome() {
    this.nav.setRoot(MainTabsPage);
  }


}
