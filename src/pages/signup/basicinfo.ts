import { Component } from '@angular/core';

import { NavController,AlertController,Events,NavParams} from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ChooseCompanyPage } from './choose-company';


@Component({
  selector: 'basicinfo',
  templateUrl: 'basicinfo.html'
})
export class BasicInfoPage {
  signup: {phone?: string,name?:string,sex?:number,password?:string,birthday?:string} = {};
  checkLength = true;
  canSubmit:{errcode?:number,errmsg?:string} = {}; 

  constructor(public navCtrl: NavController, public userData: UserData,public alertCtrl: AlertController,public events:Events,public params:NavParams) {
      this.signup.phone = params.get('phone');
  }

  inputName(){
       let prompt = this.alertCtrl.create({
      title: '输入姓名',
      message: "",
      inputs: [
        {
          name: 'name',
          placeholder: '在此输入姓名'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
              this.signup.name = data.name;
          }
        }
      ]
    });
    prompt.present();
  }
   inputPass(){
       let prompt = this.alertCtrl.create({
      title: '输入密码',
      message: "请输入6-20位数字或字母",
      inputs: [
        {
          name: 'password',
          placeholder: '在此输入密码',
          type:'password',
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
              if(!data.password.match(/^\w{6,20}$/)){
                  console.log(data.password);
                  return false;
              }else{
              this.signup.password = data.password;
              }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

 
  onSignup() {
      if(this.signup.password == undefined){
          this.events.publish('eventError','请输入密码');
          return;
      }
        if(this.signup.name == undefined){
          this.events.publish('eventError','请输入姓名');
          return;
      }
        if(this.signup.sex == undefined){
          this.events.publish('eventError','请选择性别');
          return;
      }
        if(this.signup.birthday == undefined){
          this.events.publish('eventError','请选择生日');
          return;
      }
      this.userData.register(this.signup).then((data)=>{
          if(data.errcode == 0){
                    this.navCtrl.push(ChooseCompanyPage);

          }
          console.log(data);
      });



  }
}


