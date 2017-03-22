import { Component } from '@angular/core';
import { NavController,NavParams,AlertController,Events} from 'ionic-angular';
import {UserData} from '../../providers/user-data';



@Component({
    selector: 'set-pass-page',
    templateUrl: 'reset-pass.html'
})
export class ResetPassPage {
    signup:any= {password:'',checkPassword:""};
    constructor(public navCtrl: NavController,public params: NavParams,public alertCtrl:AlertController,public events:Events,public userData:UserData) {
        this.signup.inType = this.params.get("inType");
        this.signup.phone = this.params.get("phone");
        this.signup.key = this.params.get("key");

    };
    /*ionViewWillEnter() {
        
    }*/


    onSubmit(){
        if(this.signup.password == '' || this.signup.password == undefined){
            this.events.publish('eventError','密码不能为空哦!');
            return;
        }
         if(this.signup.password != this.signup.checkPassword){
            this.events.publish('eventError','两次密码输入不一样哦!');
            return;
        }


        this.userData.setPass(this.signup).then((data)=>{
            if(data.errcode == 0){
                this.events.publish('eventSuccess','设置密码成功!');
                       let index = this.navCtrl.getActive().index;
                         this.navCtrl.remove(index-1,2);


            }

        });

    }



}
