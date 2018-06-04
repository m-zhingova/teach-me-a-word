import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { dbConfig } from '../shared/app.constant';

//Modules
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPageModule } from '../pages/list/list.module';
import { QuizPageModule } from '../pages/quiz/quiz.module';

//Services
import { WordManagerProvider } from '../providers/word-manager/word-manager';


@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ListPageModule,
    QuizPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(dbConfig.firebase, 'teach-me-a-word'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WordManagerProvider,
  ]
})
export class AppModule {}

