import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ActivityService} from "../../services/activity-service";
import { Http ,RequestOptions  } from '@angular/http';
import localForage from "localforage";
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  // activities
  public activities: any;
    public attractions: any;
    public favorite: any;
  constructor(public nav: NavController, public activityService: ActivityService,private http: Http,private storage: NativeStorage) {
    this.activities = activityService.getAll();
    this.favorite=localForage.getItem("favorite").then((data2)=>{
      console.log(data2);
      let data3={ids:data2};
        this.http.post("http://localhost:8000/api/attraction/favorite",data3,null).map(res => res.json()).subscribe((data)=>{
           console.log(data);
           this.attractions=data;
        } );

});
    let arr = [];
    arr=this.favorite;
   // console.log(arr);

   // this.favorite.map((id)=>{console.log(id)});
  /*    this.http.post("http://localhost:8000/api/attraction/favorite",this.favorite).map(res => res.json()).subscribe((data)=>
       {
         this.attractions=data
       // console.log(data);
       });*/
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
