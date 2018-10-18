import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConnecttocommunityPage } from '../pages/connecttocommunity/connecttocommunity';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MygeniePage } from '../pages/mygenie/mygenie';
import { ConnecttospecialistPage } from '../pages/connecttospecialist/connecttospecialist';
import { PatientchatboxPage } from '../pages/patientchatbox/patientchatbox';
import { SearchenginePage } from '../pages/searchengine/searchengine';
import { TreatmentsearchPage } from '../pages/treatmentsearch/treatmentsearch';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "ng2-completer";
import { InboxPage } from '../pages/inbox/inbox';
import { OutboxPage } from '../pages/outbox/outbox';
import { TrashPage } from '../pages/trash/trash';
import { SpamPage } from '../pages/spam/spam';
import { ForumPage } from '../pages/forum/forum';
import { UpdatesPage } from '../pages/updates/updates';
import { PromosPage } from '../pages/promos/promos';
import { PurchasePage } from '../pages/purchase/purchase';
import { SocialPage } from '../pages/social/social';
import { SpecialistPage } from '../pages/specialist/specialist';
import { ClinicaltrailPage } from '../pages/clinicaltrail/clinicaltrail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConnecttocommunityPage,
    MygeniePage,
    ConnecttospecialistPage,
    PatientchatboxPage,
    SearchenginePage,
    TreatmentsearchPage,
    InboxPage,
    OutboxPage,
    TrashPage,
    SpamPage,
    ForumPage,
    UpdatesPage,
    PromosPage,
    PurchasePage,
    SocialPage,
    SpecialistPage,
    ClinicaltrailPage
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConnecttocommunityPage,
    MygeniePage,
    ConnecttospecialistPage,
    PatientchatboxPage,
    SearchenginePage,
    TreatmentsearchPage,
    InboxPage,
    OutboxPage,
    TrashPage,
    SpamPage,
    ForumPage,
    UpdatesPage,
    PromosPage,
    PurchasePage,
    SocialPage,
    SpecialistPage,
    ClinicaltrailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
