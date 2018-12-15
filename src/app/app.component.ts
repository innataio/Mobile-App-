import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConnecttocommunityPage } from '../pages/connecttocommunity/connecttocommunity';
import { MygeniePage } from '../pages/mygenie/mygenie';
import { ConnecttospecialistPage } from '../pages/connecttospecialist/connecttospecialist';
import { PatientchatboxPage } from '../pages/patientchatbox/patientchatbox';
import { SearchenginePage } from '../pages/searchengine/searchengine';
import { TreatmentsearchPage } from '../pages/treatmentsearch/treatmentsearch';
import { InboxPage } from '../pages/inbox/inbox';
import { OutboxPage } from '../pages/outbox/outbox';
import { TrashPage } from '../pages/trash/trash';
import { SpamPage } from '../pages/spam/spam';
import { ForumPage } from '../pages/forum/forum';
import { UpdatesPage } from '../pages/updates/updates';
import { PromosPage } from '../pages/promos/promos';
import { PurchasePage } from '../pages/purchase/purchase';
import { SocialPage } from '../pages/social/social';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {  title: 'Home', component: HomePage, icon:"home"},
      {  title: 'Inbox ', component: InboxPage, icon:"md-download"},
      {  title: 'Outbox ', component: OutboxPage, icon:"md-send"},
      {  title: 'Trash ', component: TrashPage, icon:"md-trash"},
      {  title: 'Spam ', component: SpamPage, icon:"md-alert"},
      {  title: 'Forum ', component: ForumPage, icon:"md-chatbubbles"},
      {  title: 'Updates ', component: UpdatesPage, icon:"md-flag"},
      {  title: 'Promos ', component: PromosPage, icon:"md-pricetag"},
      {  title: 'Purchase ', component: PurchasePage, icon:"md-cart"},
      {  title: 'Social ', component: SocialPage, icon:"md-people"},
      { title: 'My Genie', component:  MygeniePage, icon:"md-medkit"},      
      
      // { title: 'List', component: ListPage },
      // { title: 'Connnect to Community', component:  ConnecttocommunityPage },
      // { title: 'Connect to Sepecialist', component:   ConnecttospecialistPage },
      // { title: 'Patient Chat Box ', component:   PatientchatboxPage },
      // { title: 'Search Engine ', component:   SearchenginePage },
      // { title: 'Treatment Search ', component:   TreatmentsearchPage },
      
      
      
    ];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
