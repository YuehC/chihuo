import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AttentionPage } from '../attention/attention';
import { CollectPage } from '../collect/collect';
import { SettingPage } from '../setting/setting';
import { DraftPage } from '../draft/draft';

import { PersonalInfoPage } from '../personal-info/personal-info';

import {UserData} from '../../providers/user-data';


/*
  Generated class for the Personal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export interface PageObj {
  title: string;
  component: any;
  icon: string;
  iconColor: string
};

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {
  userInfo:any ={id:0};

	appPages:PageObj []=[
    { title: '我的关注', component: AttentionPage, icon: 'eye',iconColor:'#ff3366' },
    { title: '我的收藏', component: CollectPage, icon: 'star',iconColor:'#10aeff' },
    { title: '我的草稿', component: DraftPage, icon: 'paper',iconColor:'#ffc701' },
    { title: '设置', component: SettingPage, icon: 'settings',iconColor:'#10aeff'}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams,public userData: UserData) {
    userData.getUserInfo().then((data)=>{
            this.userInfo = data;
        });
  };

  goPersonalInfo(){
    this.navCtrl.push(PersonalInfoPage)
  };

  goPage(page:PageObj){
    if(page.component!=''){
      this.navCtrl.push(page.component)
    }
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }

}
