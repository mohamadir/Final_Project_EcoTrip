import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ActivityService} from "../../services/activity-service";
import { Http ,RequestOptions  } from '@angular/http';
import localForage from "localforage";


@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  // activities
  public activities: any;
    public attractions: any;
    public favorite: any;
  constructor(public nav: NavController, public activityService: ActivityService,private http: Http) {
    this.activities = activityService.getAll();
    this.favorite=localForage.getItem("favorite");
    console.log(this.favorite);
      this.http.post("http://localhost:8000/api/attraction/favorite",this.favorite).map(res => res.json()).subscribe((data)=>
       {this.attractions=data
       // console.log(data);
       });
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
