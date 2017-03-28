import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
     appPages=[
    { title: '我的课表', component: '', icon: 'ios-book-outline',iconColor:'#ff3366' },
    { title: '机构管理', component: '', icon: 'ios-medal-outline',iconColor:'#10aeff' },
    { title: '我的账户', component: '', icon: 'ios-happy-outline',iconColor:'#ffc701' },
    { title: '我的钱包', component:'', icon: 'md-mail-open',iconColor:'#10aeff'}
  ];


  constructor(public navCtrl: NavController) {

  }

}
