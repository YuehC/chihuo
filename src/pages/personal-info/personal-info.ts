import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController, Events, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


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
	userInfo:any ={id:0};

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData:UserData, public camera:Camera,public actionSheetCtrl:ActionSheetController, public events:Events, public chiData:ChihuoData, public alertCtrl:AlertController  ) {
  	userData.getUserInfo().then((data)=>{
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

            this.camera.getPicture(options).then((imageData) => {
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
}
