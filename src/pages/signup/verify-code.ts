import { Component } from '@angular/core';

import { NavController,NavParams} from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { BasicInfoPage } from './basicinfo';


@Component({
    selector: 'verify-code',
  templateUrl: 'verifyCode.html'
})
export class VerifyCodePage {
  signup: {phone?: string, code?: string,key?:string} = {};
  time:number = 60;
  submitted = false;
  checkLength = true;

  constructor(public navCtrl: NavController, public userData: UserData,public params:NavParams) {
      this.signup.phone = params.get('phone');
  }
   onKey(event:any){
      //console.log(this.signup.phone.length);
      if(this.signup.code.length == 6) 
          this.checkLength = false;
      else
          this.checkLength = true;
  }

  onSendVali(){
      if(this.time != 0){
          this.time --;
          setTimeout(()=>{
              this.onSendVali();
          },1000);
      }
  }
  ngAfterViewInit() {
      this.onSendVali();
      this.sendVali();
  }
  sendVali()
  {
      this.userData.sendVali(this.signup.phone).then((data:any)=>{
          if(data.errcode == 0){
              this.signup.key = data.key;
          }
      });
  }


 /* onCheckCode(form) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      //this.navCtrl.push(TabsPage);
    }
  }*/
  onSignup(form) {

               this.userData.checkCode(this.signup).then((data)=>{
                    this.navCtrl.push(BasicInfoPage,this.signup);
          
        });
  }

}
