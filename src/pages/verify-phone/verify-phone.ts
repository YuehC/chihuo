import { Component } from '@angular/core';
import { NavController,NavParams,AlertController,Events} from 'ionic-angular';
import {UserData} from '../../providers/user-data';
import {ChihuoData} from '../../providers/chihuo-data';

import {ResetPassPage } from '../reset-pass/reset-pass';
//import {CheckPassPage } from '../check-pass/check-pass';
@Component({
    selector: 'verify-phone-page',
    templateUrl: 'verify-phone.html'
})
export class VerifyPhonePage {
    signup:any = {phone:"",code:"",inType:1,key:""};
    //callback:any;
     time:number = 60;
     userInfo:any;
    constructor(public navCtrl: NavController,public params: NavParams,public alertCtrl:AlertController,public events:Events,public userData:UserData,public goData:ChihuoData) {
    };
    ionViewWillEnter() {
        //console.log(this.params);
        this.signup.inType = this.params.get("inType");
        if(this.signup.inType == 2) this.signup.phone = this.params.get('phone');
        //this.callback = this.params.get("callback");
        //console.log(this.navCtrl.getPrevious());

    }
     onSendVali(){

      if(this.time != 0){
          this.time --;
          setTimeout(()=>{
              this.onSendVali();
          },1000);
      }else{
          this.time = 60;
          return
      }
  }
  confirmSendVali(){
        if(!this.signup.phone.match(/^1[3|4|5|7|8][0-9]\d{8}$/)){
            let alert = this.alertCtrl.create({
      title: '验证手机!',
      subTitle: '手机号码格式不对哦!',
      buttons:['确定']
    });
    alert.present();
    return;
        }
        this.sendVali();
        this.onSendVali();
  }

  sendVali()
  {
      this.userData.sendVali(this.signup.phone,this.signup.inType).then((data:any)=>{
          if(data.errcode == 0) this.signup.key = data.key;
      });
  }



    onSubmit(){
        if(this.signup.inType == 1){
        this.goData.setPhone(this.signup).then((data)=>{
            if(data.errcode == 0){
                 let index = this.navCtrl.getActive().index;
                  this.userData.getUserInfo().then((data)=>{
                      data.phone = this.signup.phone;
                      this.userData.setUserInfo(data);
        });

                this.navCtrl.remove(index-1,2);
            }
                
        })
        }else{
            //this.navCtrl.push(SetPassPage,{phone:this.signup.phone,inType:this.signup.inType});
             //this.navCtrl.push(SetPassPage);

            this.userData.verifyPhone(this.signup).then((data:any)=>{
                if(data.errcode == 0){
                this.navCtrl.push(ResetPassPage,this.signup);
                }
            });

        }
       
    }

}
