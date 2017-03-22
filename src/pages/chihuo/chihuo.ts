import { Component } from '@angular/core';


import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
// import { InAppBrowser } from 'ionic-native';
// import { TabsPage } from '../pages/tabs/tabs';
import {ChihuoData} from '../../providers/chihuo-data';



@Component({
  selector: 'chihuo',
  templateUrl: 'chihuo.html'
})
export class ChihuoPage {
  actionSheet: ActionSheet;
  token =[];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public config: Config,public chihuoData:ChihuoData) {
     /*gooqiData.getUser().then(data =>{
         console.log(data);
      });*/
  }
 ionViewDidLoad() {
     //解决微信登录两次PUSH的问题
     let index = this.navCtrl.getActive().index;
     if(index == 1) this.navCtrl.pop({animate:false});
  }



}
