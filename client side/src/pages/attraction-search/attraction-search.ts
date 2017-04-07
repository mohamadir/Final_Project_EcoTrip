import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Trips} from '../../providers/trips';
import { Http ,RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchResultsPage} from '../search-results/search-results';
import {SearchpathresultsPage} from '../searchpathresults/searchpathresults';
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
    results=[];
    mychoice="";
    searchData = {
    area:"",
    path:"",
    type:[],
    groups:[]
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    console.log(this.mychoice);
  }
  


  onChange(selectedValue){
    console.info("Selected:",selectedValue);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionSearchPage');
  }
  search(){
      console.log(this.mychoice);
      if(this.mychoice=="searchall"){
       this.http.post("http://localhost:8000/api/attraction/special_attractions", this.searchData,null).map(res => res.json()).subscribe((data)=>{
        console.log(this.searchData.type);
        this.navCtrl.push(SearchResultsPage,{"data":data});
        } );
      }
    else  if(this.mychoice=="searchpath"){
  this.http.post("http://localhost:8000/api/attraction/bestpath", this.searchData,null).map(res => res.json()).subscribe((data)=>{
              this.navCtrl.push(SearchResultsPage,{"data":data});
        } );
                this.navCtrl.push(SearchpathresultsPage);
      }
      else{
   this.http.get("http://localhost:8000/api/attraction/getall2").map(res => res.json()).subscribe((data)=>{
        this.navCtrl.push(SearchResultsPage,{"data":data});
        } );



        /*alert("אנא בחר סוג חיפוש !");*/
      }


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
