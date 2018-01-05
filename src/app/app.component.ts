import {Component, DoCheck, OnChanges, ViewChild} from '@angular/core';
import {Nav, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {SigninPage} from '../pages/signin/signin';
import {SignupPage} from '../pages/signup/signup';
import {SessionServiceProvider} from '../providers/session-service/session-service';
import {PostsPage} from '../pages/posts/posts';

@Component({
    templateUrl: 'app.html'
})
export class MyApp implements DoCheck {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = SigninPage;
    // rootPage: any = PostsPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar, public splashScreen: SplashScreen,
                private sessionService: SessionServiceProvider) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.initPages();

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

    ngDoCheck() {
        this.initPages();
    }

    initPages() {
        if (this.sessionService.isLogged) {
            this.pages = [
                {title: 'Home', component: HomePage},
                {title: 'Szukaj znajomych', component: ListPage},
                {title: 'Posty', component: PostsPage}
            ];
        } else {
            this.pages = [
                {title: 'Logowanie', component: SigninPage},
                {title: 'Nowe konto', component: SignupPage}
            ];
        }
    }

    logOut() {
        this.sessionService.clear();
        this.nav.setRoot(SigninPage);
        this.splashScreen.hide();
    }

    checkUser() {
        return this.sessionService.isLogged;
    }

}
