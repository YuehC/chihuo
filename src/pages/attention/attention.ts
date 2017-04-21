import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Attention page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attention',
  templateUrl: 'attention.html'
})
export class AttentionPage {
	items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.items =  [
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'}]},
     ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttentionPage');
  }

}
