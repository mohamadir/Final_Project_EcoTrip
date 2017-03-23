import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ActivityService} from "../../services/activity-service";
import { Http ,RequestOptions  } from '@angular/http';


@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  // activities
  public activities: any;
    public attractions: any;

  constructor(public nav: NavController, public activityService: ActivityService,private http: Http) {
    this.activities = activityService.getAll();
      this.http.get("http://localhost:8000/api/attraction/getall").map(res => res.json()).subscribe((data)=>
       this.attractions=data);
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // toggle like an activity
  toggleLike(activity) {
    activity.is_liked = !activity.is_liked;
  }
}
