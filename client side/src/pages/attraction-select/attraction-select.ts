import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController,Platform} from 'ionic-angular';
import { Http ,RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the AttractionSelect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attraction-select',
  templateUrl: 'attraction-select.html'
})
export class AttractionSelectPage {
  	id=0;
  	attraction={};
    public map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController
  	, private params: NavParams,private http: Http) {

	  	this.id=params.get("id");
	  	let idSend={
	  		id:this.id
	  	};
  	this.http.post("http://localhost:8000/api/attraction/attraction_detail",idSend).map(res => res.json()).subscribe((data)=>{
  			this.attraction=data;
  			console.log(this.attraction);
        } );
  		



  }
 




  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionSelectPage');
  }
  demmis()
	{
		    this.viewCtrl.dismiss();
	}
  

}
