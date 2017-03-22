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
  items =[];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public config: Config,public chihuoData:ChihuoData) {
     /*gooqiData.getUser().then(data =>{
         console.log(data);
      });*/
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
     //解决微信登录两次PUSH的问题
     let index = this.navCtrl.getActive().index;
     if(index == 1) this.navCtrl.pop({animate:false});
  }

   openSpeakerShare(speaker) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
            if (window['cordova'] && window['cordova'].plugins.clipboard) {
              window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
            }
          }
        },
        {
          text: 'Share via ...',
          handler: () => {
            console.log('Share via clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  openContact(speaker) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact with ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        }
      ]
    });

    actionSheet.present();
  }




}
