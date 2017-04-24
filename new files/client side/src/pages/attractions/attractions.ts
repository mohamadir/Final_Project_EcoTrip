import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AttractionService} from "../../services/attraction-service";
import {AttractionDetailPage} from "../attraction-detail/attraction-detail";

	
@Component({
  selector: 'page-attractions',
  templateUrl: 'attractions.html'
})
export class AttractionsPage {
  // list of attractions
  public attractions;

  constructor(public nav: NavController, public attractionService: AttractionService) {
    this.attractions = attractionService.getAll();
  }

  // view attraction detail
  viewAttraction(id) {
    this.nav.push(AttractionDetailPage, {id: id})
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}
