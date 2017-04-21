import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Article page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-text-area',
  templateUrl: 'text-area.html'
})
export class TextAreaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    
    this.viewCtrl.setBackButtonText('取消');
  }

}
