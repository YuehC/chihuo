import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { VerifyPhonePage } from '../verify-phone/verify-phone';
import {UserData} from '../../providers/user-data';

/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
	verifyPhonePage = VerifyPhonePage;
	hasBind:boolean = false;
	 userInfo:any={id:0};

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events, public userData:UserData) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  ionViewWillEnter(){
          this.userData.getUserInfo().then((data)=>{
            this.userInfo = data;
            if(this.userInfo.weixin == null) this.hasBind = false; else this.hasBind = true;
        });

    }

logout(){
        this.userData.logout();
    }
}
