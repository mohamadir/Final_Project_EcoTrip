import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alert,AlertController,ModalController } from 'ionic-angular';
import {AttractionSelectPage} from '../attraction-select/attraction-select';
import localForage from "localforage";
import { Ionic2RatingModule } from 'ionic2-rating';
import { NativeStorage } from '@ionic-native/native-storage';
import  {ActivityPage} from '../activity/activity';

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
                this.people = result ? <Array<String>> result : [String];
                this.local=result;                

            }, (error) => {
                console.log("ERROR: ", error);
            });
  }
isInFavorits(id){
    if(this.local !== undefined){
  this.local.map((id2)=>{
      if(id2 == id){
        return true;
      }
    }
  );
  return false;
}
return false;

}
toFavoritePage(){
  this.navCtrl.push(ActivityPage);
}
  ionViewDidLoad() {
    localForage.getItem("favorite").then((result) => {
                this.people = result ? <Array<String>> result : [];
                this.local=result;   
                console.log(this.local);             

            }, (error) => {
                console.log("ERROR: ", error);
            });
        this.results=this.navParams.get('data');
        console.log("hello im in the results")
        console.log(this.results);
        this.mychoice=this.navParams.get('mychoice');
  }

   openFilters() {

  }
  openCardAlert(id){
     let modal = this.modalCtrl.create(AttractionSelectPage,{"id":id});
     modal.present();
  }

addToFavorite(id){
    localForage.getItem("favorite").then((result) => {
                this.people = result ? <Array<String>> result : [];
                this.local=result;                

            }, (error) => {
                console.log("ERROR: ", error);
            });

        let exist=false;
          this.local.map(id2 => {
            if(id==id2){
              exist=true;

            }
            });

          if(exist){
            console.log("exist");
            return; 
          }
        localForage.getItem("favorite").then((result) => {
                    this.local = result ? <Array<String>> result : [];
                    console.log(this.local);              
                }, (error) => {
                    console.log("ERROR: ", error);
                });
        this.local.push(id);
        localForage.setItem("favorite",this.local);
             console.log("id pushed success");


        
  }
  
}
