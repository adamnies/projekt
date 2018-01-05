import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {SessionServiceProvider} from '../providers/session-service/session-service';
import {SignServiceProvider} from '../providers/sign-service/sign-service';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {FIREBASE_CONFIG} from './app.firebase.config';
import {SigninPage} from '../pages/signin/signin';
import {SignupPage} from '../pages/signup/signup';
import {PostsPage} from '../pages/posts/posts';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {NewpostPage} from '../pages/newpost/newpost';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        SigninPage,
        SignupPage,
        PostsPage,
        NewpostPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        SigninPage,
        SignupPage,
        PostsPage,
        NewpostPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SessionServiceProvider,
        SignServiceProvider,
    ]
})
export class AppModule {
}
