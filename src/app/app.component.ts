import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CampusmapPage } from '../pages/campusmap/campusmap';
import { NotificationPage } from '../pages/notification/notification';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class LocationApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
    
    this.pages = [
      {title: 'Nofication', component: NotificationPage},
      {title: 'Map', component: CampusmapPage},
      {title: 'About', component: AboutPage}
    ];
    
  }

  initializeApp(){
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}
