import { Injectable } from '@angular/core';
import { Events, LoadingController } from 'ionic-angular';
import { Transfer } from 'ionic-native';
import { Http,Headers, RequestOptions } from '@angular/http';
import { UserData } from './user-data';
import 'rxjs/add/operator/map';

/*
   Generated class for the GooqiData provider.

   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
   for more info on providers and Angular 2 DI.
 */
@Injectable()
export class HttpService {
    data:any;
    token:string;
    loading:any;
    apiUrl:string = 'http://fang.urfind.com/';
    //apiUrl:string = 'http://xuexi.app/';

    constructor(public http: Http,public user:UserData,public events:Events,public loadingCtrl:LoadingController) {
    }

    getData(url,showLoading?){
        console.log(showLoading);
        if(showLoading == true){
        this.loading = this.loadingCtrl.create({
            spinner:'dots',
            content: '数据获取中',
            duration:3000,
            dismissOnPageChange: true
        });
        }

        return this.user.getToken().then((token)=>{
            if(showLoading == true)
                this.loading.present();

            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+token});
            let options = new RequestOptions({ headers: headers });
            return new Promise(resolve => {
                this.http.get(this.apiUrl+url,options).subscribe(res => {
                    if(showLoading == true)
                        this.loading.dismiss();
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data =res.json();
                    if(this.data.errcode == 401) this.user.logout();
                    if(this.data.errcode == 1){
                        this.events.publish('eventError',this.data.errmsg);
                    }

                    resolve(this.data.data);
                });

            })
        });

    }
    postData(url,pData,showLoading?,waitString?){
        if(!waitString) waitString = '数据提交中...';
        if(showLoading == true){
        this.loading = this.loadingCtrl.create({
            spinner:'dots',
            content: waitString,
            duration:3000,
            dismissOnPageChange: true
        });
        }

        return this.user.getToken().then((token)=>{
            if(showLoading == true)
            this.loading.present();

            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+token});
            let options = new RequestOptions({ headers: headers });
            return new Promise(resolve => {
                this.http.post(this.apiUrl+url,pData,options).subscribe(res => {
                    if(showLoading == true)
                        this.loading.dismiss();
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data =res.json();
                    if(this.data.errcode == 401) this.user.logout();
                    if(this.data.errcode == 1){
                        this.events.publish('eventError',this.data.errmsg);
                    }
                    resolve(this.data);
                });

            })
        });
    }

    upload(fileUrl,uploadUrl){
        this.loading = this.loadingCtrl.create({
            spinner:'dots',
            content: '图片上传中',
            duration:3000,
            dismissOnPageChange: true
        });

        return this.user.getToken().then((token)=>{
            const fileTransfer = new Transfer();
            var options: any;
            options = {
                fileKey: 'file',
                fileName: fileUrl.substr(fileUrl.lastIndexOf('/') + 1),
                headers: {'Authorization':'Bearer '+token}
            }
            //console.log('fileUrl',fileUrl);
            return fileTransfer.upload(fileUrl, encodeURI(this.apiUrl+uploadUrl), options)
            .then((data:any) => {
                this.loading.dismiss();
                    return JSON.parse(data.response);
            }, (err) => {
                return {errcode:1001,errmsg:'服务器小哥有点忙哦'};
            })

        });
    }

}
