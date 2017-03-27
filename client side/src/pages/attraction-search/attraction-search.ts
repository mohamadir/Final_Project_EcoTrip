import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Trips} from '../../providers/trips';
import { Http ,RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchResultsPage} from '../search-results/search-results';
/*
  Generated class for the AttractionSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attraction-search',
  templateUrl: 'attraction-search.html'
})
export class AttractionSearchPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {}
  results=[];

  searchData = {
    area:"",
    path:"",
    type:[]
  }


  onChange(selectedValue){
    console.info("Selected:",selectedValue);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionSearchPage');
  }
  search(){
      console.log("search method");
      this.http.post("http://localhost:8000/api/attraction/getall2", this.searchData,null).map(res => res.json()).subscribe((data)=>{
       console.log("opa");
      console.log(data);
      this.navCtrl.push(SearchResultsPage,{"data":data});
      } );


  }

 /* onclick()
  {
   
      this.http.get("http://localhost:8000/api/attraction/getall").map(res => res.json()).subscribe(data=>
      {
          var data = data;
      });
}
  */
}
