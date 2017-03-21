import { Component } from '@angular/core';

import { NavController,AlertController } from 'ionic-angular';

//import { ContactPage} from '../contact/contact';
import { ContactData } from '../../providers/contact-data';



@Component({
  selector: 'join-company',
  templateUrl: 'join-company.html'
})
export class JoinCompanyPage {
    queryText?:string="";
    timeOutId?:any;
    items?:any = [];


  constructor(public navCtrl: NavController,public contactData:ContactData,public alertCtrl: AlertController) {}

   showConfirm(cid,name) {
    let confirm = this.alertCtrl.create({
      title: '加入机构',
      message: '您确认要加入'+name+'?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '加入',
          handler: () => {
              this.contactData.confirmJoin(cid).then((data)=>{
                  if(data.errcode == 0) this.navCtrl.popToRoot();
              });
            console.log('Agree clicked'+cid);
          }
        }
      ]
    });
    confirm.present();
  }

  updateList() {
      clearTimeout(this.timeOutId);

      this.timeOutId =  setTimeout(()=>{
          this.contactData.joinCompany(this.queryText).then(data=>{
              this.items = data.data;

          });
      },2000);
  }
}


