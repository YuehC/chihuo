import { Component } from '@angular/core';

import { NavController,ToastController, Platform,Events } from 'ionic-angular';
 import { Keyboard, StatusBar } from 'ionic-native';


import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
//import { GooqiPage } from '../gooqi/gooqi';
import { VerifyPhonePage } from '../verify-phone/verify-phone';
import { UserData } from '../../providers/user-data';
declare var Wechat: any;



@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    login: {username?: string, password?: string} = {};
    submitted = false;
    submitStatus = false;
    pushPage:any; 
    verifyPhonePage = VerifyPhonePage;
    constructor(public navCtrl: NavController, public userData: UserData,private toastCtrl: ToastController,
               public platform:Platform,public events:Events) { 
        this.pushPage = SignupPage;
               if (platform.is('ios')) {
                Keyboard.disableScroll(true);
            }

    }
    ionViewWillEnter(){
            StatusBar.hide();
    }
    ionViewWillLeave(){
            StatusBar.show();
    }

    onLogin(form) {
        if(!this.login.username.match(/^1[3|4|5|7|8][0-9]\d{8}$/)){
            let toast = this.toastCtrl.create({
                message: '手机号格式不正确',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        this.submitted = true;

            
        this.userData.login(this.login).then((data:any)=>{
            if(data.errcode == 0)
                this.navCtrl.push(TabsPage);
        });
    }

  /*  onSignup() {
        this.navCtrl.push(SignupPage);
    }*/
    onKey(event:any) {
        //console.log(this.login.password);
        if(this.login.username !=undefined && this.login.password != undefined) this.submitStatus = true;
    }
     weixinLogin(){
           this.submitted = true;
        Wechat.isInstalled((installed)=> {
            if(installed){
                let scope = "snsapi_userinfo";
                let state = "_" + (+new Date());
                Wechat.auth(scope, state, (response)=> {
                    //alert(JSON.stringify(response));
                    if(response.code != undefined){
                        this.userData.weixinLogin(response.code).then((data:any)=>{
                              if(data.errcode == 0){
                                  this.navCtrl.push(TabsPage);
                              }
                        })
                    }

                    // you may use response.code to get the access token.
                }, (reason)=> {
                    this.events.publish('eventError',reason);
                });
            }else{
                this.events.publish('eventError','您还没有安装微信哦!');
            }
        }, (reason)=> {
            this.events.publish('eventError',reason);
        });

    }


}
