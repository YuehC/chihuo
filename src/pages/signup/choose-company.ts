import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import{ JoinCompanyPage} from './join-company';
import{ CompanyInfoPage} from './company-info';

@Component({
  selector: 'choose-company',
  templateUrl: 'choose-company.html'
})
export class ChooseCompanyPage {
  signup: {phone?: string,name?:string,sex?:number,password?:string,birthday?:string} = {};
  checkLength = true;
  canSubmit:{errcode?:number,errmsg?:string} = {}; 

  constructor(public navCtrl: NavController, ) {}

  goPage(x){
      if(x == 1)
          this.navCtrl.push(CompanyInfoPage);
      else
          this.navCtrl.push(JoinCompanyPage);
  }


}


