import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Alert,AlertController,ModalController } from 'ionic-angular';
import {AttractionSelectPage} from '../attraction-select/attraction-select';
import localForage from "localforage";
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
    people;
    public local: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController
    ,public modalCtrl: ModalController) {
   // this.local = new Storage(LocalStorage);
   // this.local.set('didTutorial', 'true');
    localForage.setItem("key", "hi");
     localForage.getItem("key").then((result) => {
                this.people = result ? <Array<Object>> result : [];
                console.log(result);
            }, (error) => {
                console.log("ERROR: ", error);
            });


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


  }

}
