import { Component } from '@angular/core';

import { NavController,ToastController} from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { VerifyCodePage } from './verify-code';


@Component({
  selector: 'page-login',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {phone?: string} = {};
  checkLength = true;
  canSubmit:{errcode?:number,errmsg?:string} = {}; 

  constructor(public navCtrl: NavController, public userData: UserData,private toastCtrl: ToastController) {}
  onKey(event:any){
      //console.log(this.signup.phone.length);
      if(this.signup.phone.length == 11) 
          this.checkLength = false;
      else
          this.checkLength = true;
  }

  onSignup(form) {

       if(!this.signup.phone.match(/^1[3|4|5|7|8][0-9]\d{8}$/)){
            let toast = this.toastCtrl.create({
                message: '手机号格式不正确',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
         this.userData.checkPhone(this.signup.phone).then((data?:{errcode:number,errmsg:string})=>{
             if(data.errcode == 0){
                
      this.navCtrl.push(VerifyCodePage,this.signup);
             }
        });
  }
}


