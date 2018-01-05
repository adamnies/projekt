import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {SessionServiceProvider} from '../../providers/session-service/session-service';
import {SignServiceProvider} from '../../providers/sign-service/sign-service';
import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';


interface Profile {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    img: string;
    about: string;
}

@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html'
})
export class SigninPage {

    user: any = {
        password: '',
        email: ''
    };
    profileCollection: AngularFirestoreCollection<Profile>;
    profiles: Observable<Profile[]>;
    snapshot: any;
    of;
    ol;

    constructor(public navCtrl: NavController,
                private sessionService: SessionServiceProvider,
                private signService: SignServiceProvider,
                private alertCtrl: AlertController,
                private afs: AngularFirestore) {

    }

    ngOnInit() {
        this.profileCollection = this.afs.collection('profiles', ref => {
            return ref.where('email', '==', this.user);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(changes => {
                    return changes.map(a => {
                        const data = a.payload.doc.data() as Profile;
                        data.id = a.payload.doc.id;
                        this.of = data.firstName;
                        this.ol = data.lastName;
                        return data;
                    });
                }
            );
    }
    goToSignUp() {
        this.navCtrl.setRoot(SignupPage);
    }


    signin() {
        this.signService.login(this.user)
            .then(e => {
                    this.sessionService.isLogged = true;
                    this.sessionService.user = e;
                    this.sessionService.con();
                    this.navCtrl.setRoot(HomePage);
            })
            .catch(e => {
                this.showAlert('Niepoprawne dane logowania');
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
