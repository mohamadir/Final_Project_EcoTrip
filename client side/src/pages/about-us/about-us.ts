import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from 'ionic-native';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
  providers: [YoutubeVideoPlayer]
})
export class AboutUSPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUSPage');
  }
	playVideo(videoId) {
	  YoutubeVideoPlayer.openVideo(videoId);
	}
}
