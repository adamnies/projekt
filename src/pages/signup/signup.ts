import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {SessionServiceProvider} from '../../providers/session-service/session-service';
import {SignServiceProvider} from '../../providers/sign-service/sign-service';
import {SigninPage} from '../signin/signin';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    img: string;
    about: string;
}

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {

    user: any = {
      password: '',
      email: '',
    };

    profile: Profile = {
        firstName: '',
        lastName: '',
        email: '',
        img: 'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280',
        about: ''
    };


    profileCollection: AngularFirestoreCollection<Profile>;
    profiles: Observable<Profile[]>;


    constructor(public navCtrl: NavController,
                private sessionService: SessionServiceProvider,
                private signService: SignServiceProvider,
                private alertCtrl: AlertController,
                private afs: AngularFirestore) {

    }

    goToSignIn() {
        this.navCtrl.setRoot(SigninPage);
    }
    ngOnInit() {
        this.profileCollection = this.afs.collection('profiles');
        this.profiles = this.profileCollection.valueChanges();
    }


    signup() {
        this.profile.email = this.user.email;
        this.signService.register(this.user)
            .then(e => {
                this.showAlert('Możesz się zalogować');
                this.profileCollection.add(this.profile);
                this.navCtrl.setRoot(SigninPage);
            })
            .catch(e => {
                this.showAlert('Takie konto już istnieje');
                this.user = { password: '', email: ''};
            });
    }

    showAlert(title) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: '',
            buttons: ['OK']
        });
        alert.present();
    }
}
