import { Component } from '@angular/core';

import { NavController,AlertController,Events,NavParams} from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { ContactData } from '../../providers/contact-data';
import { MapPage } from '../map/map';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'company-info',
  templateUrl: 'company-info.html'
})
export class CompanyInfoPage {
  signup: {phone?: string,name?:string,intro?:string,limitUsers?:number,password?:string,birthday?:string,address?:string,lng?:string,lat?:string,province?:string,city?:string,district?:string,street?:string,streetNumber?:number,longitude?:string,latitude?:string} = {};
  checkLength = true;
  canSubmit:{errcode?:number,errmsg?:string} = {};
  data?:any;

  constructor(public navCtrl: NavController, public userData: UserData,public alertCtrl: AlertController,public events:Events,public params:NavParams,public contactData:ContactData) {
        }
  /*ionViewDidEnter(){
      console.log('params',this.params.get('type'));
      if(this.params.get('pType')==1){
          this.signup.address = this.params.get('address');
          this.signup.lng = this.params.get('lng');
          this.signup.lat = this.params.get('lat');
          this.signup.province = this.params.get('province');
          this.signup.city = this.params.get('city');
          this.signup.district = this.params.get('district');
          this.signup.street = this.params.get('street');
          this.signup.streetNumber = this.params.get('streetNumber');
      }

  }*/
  getParams = (params) => {
     return new Promise((resolve, reject) => {
          this.signup.address = params.address;
          this.signup.lng = params.lng;
          this.signup.lat = params.lat;
          this.signup.province = params.province;
          this.signup.city = params.city;
          this.signup.district = params.district;
          this.signup.street = params.street;
          this.signup.streetNumber = params.streetNumber;
          this.signup.longitude = params.longitude;
          this.signup.latitude = params.latitude;

         //console.log('params',params);
         resolve();
     });
}

  inputName(){
       let prompt = this.alertCtrl.create({
      title: '输入机构名称',
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
  inputPhone(){
       let prompt = this.alertCtrl.create({
      title: '输入电话',
      message: "输入机构电话",
      inputs: [
        {
          name: 'phone',
          placeholder: '在此输入电话'
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
              this.signup.phone = data.phone;
          }
        }
      ]
    });
    prompt.present();
  }


  goMap(){
      this.navCtrl.push(MapPage,{callback:this.getParams,name:this.signup.name,lng:this.signup.lng,lat:this.signup.lat,address:this.signup.address});

  }

 
  onSignup() {
       if(this.signup.name == undefined){
          this.events.publish('eventError','请输入机构名称');
          return;
      }
       if(this.signup.phone == undefined){
          this.events.publish('eventError','电话不能为空');
          return;
      }
      if(this.signup.address == undefined ||this.signup.address == ""){
          this.events.publish('eventError','地址不能为空');
          return;
      }
      this.contactData.editCompanyInfo(this.signup).then((data)=>{
          if(data.errcode == 0) {
                    this.navCtrl.push(ContactPage);
          }
      });




      
    
  }
}


