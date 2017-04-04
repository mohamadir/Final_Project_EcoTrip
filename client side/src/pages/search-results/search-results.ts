import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alert,AlertController,ModalController } from 'ionic-angular';
import {AttractionSelectPage} from '../attraction-select/attraction-select';
import localForage from "localforage";
import { Ionic2RatingModule } from 'ionic2-rating';
import { NativeStorage } from '@ionic-native/native-storage';
/*
  Generated class for the SearchResults page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {
	  results=[];
    mychoice="";
    types=[];
    res={
        type: ""
    };
    people: any;
    local:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController
    ,public modalCtrl: ModalController,private storage: NativeStorage) {
   // this.local = new Storage(LocalStorage);
   // this.local.set('didTutorial', 'true');

     localForage.getItem("favorite").then((result) => {
                this.people = result ? <Array<Object>> result : [];
                this.local=result;                

            }, (error) => {
                console.log("ERROR: ", error);
            });
  
    console.log(this.people);

  }

  ionViewDidLoad() {
        this.results=this.navParams.get('data');
        this.mychoice=this.navParams.get('mychoice');
        console.log('ionViewDidLoad SearchResultsPage');
  }

   openFilters() {

  }
  openCardAlert(id){
     let modal = this.modalCtrl.create(AttractionSelectPage,{"id":id});
     modal.present();
  }

  addToFavorite(id){
  

   /* 
        /////////////   remove item by id ////////////////////////

   localForage.getItem("favorite").then((result) => {
                this.local = result ? <Array<Object>> result : [];
                console.log(this.local);              
            }, (error) => {
                console.log("ERROR: ", error);
            });
    this.local.map(id2=>{
       if(id2==id)
       {
         this.local.pop(id);
         console.log("im poped"+id);
       }
    })
     localForage.setItem("favorite",this.local);       
       localForage.getItem("favorite").then((result) => {
                this.local = result ? <Array<Object>> result : [];
                console.log(this.local);              
            }, (error) => {
                console.log("ERROR: ", error);
            });
    console.log(this.local);       
  */
console.log("added");
if( this.local == null ) {
     this.local=[];
     localForage.setItem("favorite", this.local);
     console.log("local is null");

  }
  else{
    let exist=false;
      this.local.map(id2 => {
        if(id==id2){
          exist=true;

        }
        });
      if(exist)
        return;
    localForage.getItem("favorite").then((result) => {
                this.local = result ? <Array<Object>> result : [];
                console.log(this.local);              
            }, (error) => {
                console.log("ERROR: ", error);
            });
    this.local.push(id);
    localForage.setItem("favorite",this.local);
         console.log("id pushed success");

  }

///////////////////////////////////////////
/*     localForage.getItem("key").then((result) => {
                this.people = result ? <Array<Object>> result : [];
                this.people.push("good");
                localForage.setItem("key", this.people);
                console.log(result);
            }, (error) => {
                console.log("ERROR: ", error);
            });*/

  }

}
