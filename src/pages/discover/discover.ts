import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
 
import { TextAreaPage } from '../text-area/text-area';


/*
  Generated class for the Discover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
	items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public evevts: Events ) {
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
    console.log('ionViewDidLoad DiscoverPage');
  }

  goToTextArea(){
    this.navCtrl.push(TextAreaPage)
  };

}
