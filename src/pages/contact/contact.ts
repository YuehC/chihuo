import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
     appPages=[
    { title: '我的关注', component: '', icon: 'eye',iconColor:'#ff3366' },
    { title: '我的收藏', component: '', icon: 'star',iconColor:'#10aeff' },
    { title: '我的草稿', component: '', icon: 'paper',iconColor:'#ffc701' },
    { title: '设置', component:'', icon: 'settings',iconColor:'#10aeff'}
  ];


  constructor(public navCtrl: NavController) {

  }
  //gopage(){
    //this.navCtrl.push()
  //}

}
