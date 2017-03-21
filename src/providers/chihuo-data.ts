import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import {UserData} from './user-data';
import 'rxjs/add/operator/map';

/*
  Generated class for the GooqiData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChihuoData {
    data:any;

  constructor(public httpapi: HttpService,public userData:UserData) {
    //console.log('Hello GooqiData Provider');
  }
  tokenLogin(){
      return this.httpapi.postData('api/user/tokenLogin',[]).then((data:any)=>{
          if(data.error ==401 ){
              this.userData.logout();
          }
      });
  }
   getToken(){
       return this.httpapi.getData('api/user/getToken').then(data => {
      return data;
    });

  }
  getUser(){
       return this.httpapi.getData('api/user/getUser').then(data => {
      return data;
    });

  }
   upload(fileUrl){
      return this.httpapi.upload(fileUrl,'api/user/uploadLogo').then((data:any)=>{
          return data;
      });

  }
    editUser(key,params){
      return this.httpapi.postData('api/user/editPersonalInfo',{key:key,params:params},true,'个人信息保存中').then((data:any)=>{
          return data;
      });
  }
   checkPass(pass){
      return this.httpapi.postData('api/user/checkPass',{'pass':pass}).then((data:any)=>{
          return data;
      });
  }
  setPhone(signup){
      return this.httpapi.postData('api/user/setPhone',signup).then((data:any)=>{
          return data;
      });
  }
  sendVali(phone,sendType){
      return this.httpapi.postData('api/user/sendUserVali',{'phone':phone,'sendType':sendType}).then((data:any)=>{
          return data;
      });
  }
 bindWeixin(code){
      return this.httpapi.postData('api/user/bindWeixin',{code:code},true,'绑定中...').then((data:any)=>{
          return data;
      });
  }
   unBindWeixin(uid){
      return this.httpapi.postData('api/user/unBindWeixin',{uid:uid},true,'解绑中...').then((data:any)=>{
          return data;
      });
  }
  checkVersion(){
       return this.httpapi.getData('api/user/checkVersion').then(data => {
      return data;
    });

  }









}
