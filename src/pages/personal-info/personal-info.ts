import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController, Events, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';


import {UserData} from '../../providers/user-data';
import {ChihuoData} from '../../providers/chihuo-data';

/*
  Generated class for the PersonalInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html'
})
export class PersonalInfoPage {
    //这里赋值要加一下,不然容易报错
	userInfo:{id:number,sex?:any,head_image?:string,address?:string,lng?:string,lat?:string,province?:string,city?:string,district?:string,street?:string,street_number?:number,longitude?:string,latitude?:string} ={id:0};

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData:UserData, public actionSheetCtrl:ActionSheetController, public events:Events, public chiData:ChihuoData, public alertCtrl:AlertController  ) {
  	userData.getUserInfo().then((data)=>{
        console.log(data)
        if(data != null)
            this.userInfo = data;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

  setLogo(){
        let actionSheet = this.actionSheetCtrl.create({
            title: '头像设置',
            buttons: [
                {
                    text: '拍照',
                    handler: () => {
                        this.photoSet(1);
                    }
                },{
                    text: '从相册里选择',
                    handler: () => {
                        this.photoSet(0);
                    }
                },{
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
    photoSet(getType){
        let options:any = {
            quality:90,
            destinationType:1,
            allowEdit:true,
            targetWidth:400,
            targetHeight:400,
            sourceType:getType,

        }

            Camera.getPicture(options).then((imageData) => {
            this.chiData.upload(imageData).then((data)=>{
                if(data.errcode == 0){
                    this.userInfo.head_image = data.path_url;
                }else{
                    let alert = this.alertCtrl.create({
                        title: '上传头像',
                        subTitle: data.errmsg,
                        buttons: ['确定']
                    });
                    alert.present();
                }
                //console.log('res',data.errcode);
            });

        }, (err) => {
            let alert = this.alertCtrl.create({
                title: '上传头像',
                subTitle: '网络不好哦',
                buttons: ['确定']
            });
            alert.present();

            // Handle error
        });
    }
    inputText(key,value){
        let msg;
        if(key == 'gooqi_no')
            msg ='请输入6-20位的数字、字母或下划线,果奇号生成后将无法修改';
        else
            msg = '';
        let prompt = this.alertCtrl.create({
            title: value,
            message: msg,
            inputs: [
                {
                    name: 'name',
                    placeholder: '在此输入'+value
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
                        if(key == 'gooqi_no'){
                            if(!data.name.match(/^\w{6,20}$/)) return false;
                        }
                        console.log(data.name);
                        if(data.name != "")
                         this.editItem(key,data.name);

                    }
                }
            ]
        });
        prompt.present();
    }
    editItem(key,params){
        this.chiData.editUser(key,params).then((data)=>{
            if(data.errcode == 0){
                if(key == "address"){
                    this.userInfo.address = params.address;
                    this.userInfo.lng = params.lng;
                    this.userInfo.lat = params.lat;
                    this.userInfo.province = params.province;
                    this.userInfo.city = params.city;
                    this.userInfo.district = params.district;
                    this.userInfo.street = params.street;
                    this.userInfo.street_number = params.streetNumber;
                    this.userInfo.longitude = params.longitude;
                    this.userInfo.latitude = params.latitude;

                }else{
                    this.userInfo[key] = params;
                }
                this.userData.setUserInfo(this.userInfo);
            }
        });

    }
}
