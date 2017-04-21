import { Component } from '@angular/core';

import { ChihuoPage } from '../chihuo/chihuo';
import { DiscoverPage } from '../discover/discover';
import { PersonalPage } from '../personal/personal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ChihuoPage;
  tab2Root: any = DiscoverPage;
  tab3Root: any = PersonalPage;

  constructor() {

  }
}
