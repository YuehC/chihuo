import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Collect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html'
})
export class CollectPage {
	items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.items =  [
	
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
         {'profilePic':'assets/img/bear.jpg',name:'吃货哥',sessions:[{name:'ss'},{name:'22'},{name:'33'}]},
     ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectPage');
  }

}
