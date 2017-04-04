import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController,Platform} from 'ionic-angular';
import { Http ,RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { SocialSharing } from '@ionic-native/social-sharing';
import {CallNumber} from '@ionic-native/call-number';
import { NativeStorage } from '@ionic-native/native-storage';


import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
/*
  Geneerated class for the AttractionSelect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attraction-select',
  templateUrl: 'attraction-select.html',
  providers:[SocialSharing]
})
export class AttractionSelectPage {
  	id=0;
  	attraction={};
    lat=0;
    lon=0;
    phone=0;
    public map: any;
    public erating=0; // current rating for enjoyRating 
    public prating=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController
  	, private params: NavParams,private callNumber: CallNumber,private http: Http,public platform: Platform,private socialSharing: SocialSharing,
    private googleMaps: GoogleMaps) {

	  	this.id=params.get("id");
	  	let idSend={
	  		id:this.id
	  	};
  	this.http.post("http://localhost:8000/api/attraction/attraction_detail",idSend).map(res => res.json()).subscribe((data)=>{
  			this.attraction=data;
        this.lat=data.address.lat;
        this.lon=data.address.lon;
        this.phone=data.phone;
        console.log("lat"+this.lat+",lon:"+this.lon);

  			console.log(this.attraction);

        this.platform.ready().then(() => {
        console.log('ready');
        if(this.lat&&this.lon)
            this.initializeMap();
          
    });
    } );
  		
     



  }
  range(n) {
    return new Array(Math.round(n));
  }
   erate(stars) {
    this.erating = stars;
    let data={erating: this.erating,id: this.id};
    this.http.post("http://localhost:8000/api/attraction/set_rating",data).map(res => res.json()).subscribe((data)=>{
        console.log(data);
        let array=data.rating;
        let rateSum=0;
        array.map(i=>{rateSum+=i});
       let rateAvg=rateSum/array.length;
          let data2={rateAvg: rateAvg,id: this.id};
          this.http.post("http://localhost:8000/api/attraction/set_engoyrating",data2).map(res=> res.json()).subscribe((data)=>{
              console.log(data);
          });
        console.log(rateAvg);
        } );


  }
  prate(stars) {
    this.erating = stars;
  }
  createRange(number){
  var items: number[] = [];
  for(var i = 1; i <= number; i++){
     items.push(i);
  }
  return items;
}
  initializeMap() {
    console.log("lat"+this.lat+",lon:"+this.lon);
    let latLng = new google.maps.LatLng(this.lat,this.lon);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);
          console.log('im on map ');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionSelectPage');
  }
  demmis()
	{
		    this.viewCtrl.dismiss();
	}
  call(){
      this.callNumber.callNumber(this.phone+"", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'))
  }
  share(){
    // Share via email

    this.socialSharing.canShareViaEmail().then(() => {
          console.log("possible");
      }).catch(() => {
          console.log("not possible");
      });

        this.socialSharing.shareViaWhatsApp('Body', 'Subject', 'recipient@example.org').then(() => {
          // Success!
          console.log("success");
        }).catch(() => {
          // Error!
          console.log("error");

        });
  }

}
