import { Injectable } from '@angular/core';

import { Events,LoadingController } from 'ionic-angular';
import { Http} from '@angular/http';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {
  _favorites = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  data:any;
  loading:any;
  //apiUrl:string = 'http://xuexi.app/';
  apiUrl:string = 'http://fang.urfind.com/';


  constructor(public events: Events, public storage: Storage,public http: Http,public loadingCtrl:LoadingController) {}

   postData(url,pData,showLoading?,waitString?){
        if(!waitString) waitString = '数据提交中...';
        if(showLoading == true){
        this.loading = this.loadingCtrl.create({
            spinner:'dots',
            content: waitString,
            duration:6000,
            dismissOnPageChange: true
        });

         this.loading.present();

        }
      return new Promise(resolve => {
           this.http.post(this.apiUrl+url,pData).subscribe(res => {
               if(showLoading == true)
                        this.loading.dismiss();
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data =res.json();
        if(this.data.errcode == 1){
            console.log('error');
            this.events.publish('eventError',this.data.errmsg);
        }
        resolve(this.data);
      });
          
      })
  }

  checkPhone(phone){
      return this.postData('api/user/checkPhone',{'phone':phone}).then(data=>{
          return data;
      });
  }
  sendVali(phone,sendType?){
      if(!sendType) sendType = 0;
       return this.postData('api/user/sendVali',{'phone':phone,'sendType':sendType}).then(data=>{
          return data;
      });

  }
   verifyPhone(signup){
       return this.postData('api/user/verifyPhone',signup).then((data:any)=>{
          return data;
      });

  }
   setPass(signup){
       return this.postData('api/user/setPass',signup).then((data:any)=>{
          return data;
      });

  }


  checkCode(data){
       return this.postData('api/user/checkCode',data).then(data=>{
          //return data;
      });
  }



  register(signup){
      return this.postData('api/user/register',signup,true,'登陆中...').then((data:{errcode?:number,errmsg?:string,data?:any,token?:string})=>{
          if(data.errcode == 0){
              this.storage.set(this.HAS_LOGGED_IN,true);
              this.storage.set('userinfo',data.data);
              this.storage.set('userToken',data.token);
          }
          return data;
      });
  }
  login(signup) {
    return this.postData('api/user/login',signup,true,'登陆中...').then((data:any)=>{
        if(data.errcode == 0){
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('userToken',data.token);
        this.storage.set('userinfo',data.data);
        this.events.publish('user:login');
        }
        return data;
    });
  }
   weixinLogin(code) {
    return this.postData('api/user/weixinLogin',{code:code},true,'微信登陆中...').then((data:any)=>{
        if(data.errcode == 0){
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('userToken',data.token);
        this.storage.set('userinfo',data.data);
        this.events.publish('user:login');
        }
        return data;
    });
  }

  taskLogin(token){
     this.postData('api/user/taskLogin',{'token':token}).then((data:any)=>{
        if(data.errcode == 0){
        this.storage.set('userinfo',data.data);
        }else{
            this.logout();
        }
    });

  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    //this.storage.remove('username');
    this.storage.remove('userinfo');
    this.storage.remove('userToken');
    this.events.publish('user:logout');
  }

  setUsername(username) {
    this.storage.set('username', username);
  }

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }
  getToken(){
       return this.storage.get('userToken').then((value) => {
      return value;
    });

  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }
  getUserInfo(){
      return this.storage.get('userinfo').then((value) => {
          return value;
      });
  }
   setUserInfo(userInfo){
      this.storage.set('userinfo',userInfo);
      return;
   }




}
