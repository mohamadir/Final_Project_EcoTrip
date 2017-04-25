import {Component} from "@angular/core";
import {NavController,AlertController,ModalController} from "ionic-angular";
import {ActivityService} from "../../services/activity-service";
import { Http ,RequestOptions  } from '@angular/http';
import localForage from "localforage";
import { NativeStorage } from '@ionic-native/native-storage';
import {AttractionSelectPage} from '../attraction-select/attraction-select';


@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  // activities
  public activities: any;
    public attractions: any;
    public favorite: any;
  constructor(public nav: NavController,private alertCtrl: AlertController,public modalCtrl: ModalController, public activityService: ActivityService,private http: Http,private storage: NativeStorage) {
    this.activities = activityService.getAll();
    this.favorite=localForage.getItem("favorite").then((data2)=>{
      console.log(data2);
      let data3={ids:data2};
        this.http.post("http://ecotr.herokuapp.com/api/attraction/favorite",data3,null).map(res => res.json()).subscribe((data)=>{
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





       // shake //

       
  }
  remove(id)
  {
    this.favorite=localForage.getItem("favorite").then((data2)=>{
     let dat=<Array<String>>data2;
     let index=dat.indexOf(id);
     if (index > -1) {
       dat.splice(index, 1);
     this.favorite=localForage.setItem("favorite",dat);
     let data3={ids:dat};
     this.http.post("http://ecotr.herokuapp.com/api/attraction/favorite",data3,null).map(res => res.json()).subscribe((data)=>{
           this.attractions=data;
        } );
       }
    });
   

  }
  ionViewDidLoad() {
    this.favorite=localForage.getItem("favorite").then((data2)=>{
      console.log(data2);
      let data3={ids:data2};
        this.http.post("http://ecotr.herokuapp.com/api/attraction/favorite",data3,null).map(res => res.json()).subscribe((data)=>{
           console.log(data);
           this.attractions=data;
        } );
    });
}
  openCardAlert(id){
     let modal = this.modalCtrl.create(AttractionSelectPage,{"id":id});
     modal.present();
  }
  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // toggle like an activity
  toggleLike(activity) {
    activity.is_liked = !activity.is_liked;
  }

deleteAll(){
      let alert = this.alertCtrl.create({
        title: 'מחיקת מועדפים',
        message: 'האם ברצונך למחוק את כל המועדפים שלך ?',
        buttons: [
          {
            text: 'בטל',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'מחק',
            handler: () => {
              this.attractions=null;
              localForage.setItem("favorite",[]);
              console.log('delete clicked');
            }
          }
        ]
      });
      alert.present();
    }


}
