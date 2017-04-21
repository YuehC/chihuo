import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import { ChihuoData } from '../providers/chihuo-data';
import { HttpService} from '../providers/http-service';
import { UserData } from '../providers/user-data';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { VerifyCodePage } from '../pages/signup/verify-code';
import { BasicInfoPage } from '../pages/signup/basicinfo';
import { ChihuoPage } from '../pages/chihuo/chihuo';
import { VerifyPhonePage } from '../pages/verify-phone/verify-phone';
import { ResetPassPage } from '../pages/reset-pass/reset-pass';
import { AttentionPage } from '../pages/attention/attention';
import { PersonalPage } from '../pages/personal/personal';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { CollectPage } from '../pages/collect/collect';
import { SettingPage } from '../pages/setting/setting';
import { DraftPage } from '../pages/draft/draft';
import { DiscoverPage } from '../pages/discover/discover';
import { TextAreaPage } from '../pages/text-area/text-area';




import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
     BasicInfoPage,
     VerifyCodePage,
     ChihuoPage,
     VerifyPhonePage,
     AttentionPage,
     PersonalPage,
     PersonalInfoPage,
     CollectPage,
     SettingPage,
     DraftPage,
     DiscoverPage,
     TextAreaPage,


  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText:'返回',
      tabsPlacement: 'bottom',
      pageTransition: 'ios',
      tabsHideOnSubPages:true,
      platforms:{
          ios:{
               scrollAssist: false,    // Valid options appear to be [true, false]
            autoFocusAssist: false
          }
      },
    }),
     IonicStorageModule.forRoot({
         name: '__chihuo',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
     BasicInfoPage,
     VerifyCodePage,
     ChihuoPage,
     VerifyPhonePage,
     AttentionPage,
     PersonalPage,
     PersonalInfoPage,
     CollectPage,
     SettingPage,
     DraftPage,
     DiscoverPage,
     TextAreaPage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},UserData,HttpService,ChihuoData]
})
export class AppModule {}
