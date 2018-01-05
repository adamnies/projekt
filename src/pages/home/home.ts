import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SessionServiceProvider} from '../../providers/session-service/session-service';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

interface Profile {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    img: string;
    about: string;
}

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    user;
    profileCollection: AngularFirestoreCollection<Profile>;
    profiles: Observable<Profile[]>;

    profileDoc : AngularFirestoreDocument<Profile>;
    profile: Observable<Profile>;



    showSrc = false;
    s = 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg';
    snapshot: any;
    phot: string;
    id;
    ob: Profile;
    desc;
    of;
    ol;
    oe;
    oa;
    oi;
    display = true;

    constructor(public navCtrl: NavController,
                private sessionService: SessionServiceProvider,
                private afs: AngularFirestore) {

    }

    ngOnInit() {
        this.user = this.sessionService.user.email;
        this.profileCollection = this.afs.collection('profiles', ref => {
            return ref.where('email', '==', this.user);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(changes => {
                    return changes.map(a => {
                        const data = a.payload.doc.data() as Profile;
                        data.id = a.payload.doc.id;
                        this.id = data.id;
                        this.of = data.firstName;
                        this.oi = data.img;
                        this.ol = data.lastName;
                        this.oe = data.email;
                        this.oa = data.about;
                        return data;
                    });
                }
            );

    }

    co() {
        console.log(this.snapshot);
    }

    tog() {
        this.showSrc = !this.showSrc;
    }

    disp() {
        this.display = !this.display;
    }

    sklej() {
        this.ob = {
            id: this.id,
            firstName: this.of,
            lastName: this.ol,
            email: this.oe,
            about: this.oa,
            img: this.oi,
        }
    }

    updatePhoto() {
        const x = 'profiles/' + this.id;
        this.profileDoc = this.afs.doc(x);
        this.profileDoc.update({img: this.phot});
        this.phot = '';
        this.tog();
    }

    updateDesc() {
        const x = 'profiles/' + this.id;
        this.profileDoc = this.afs.doc(x);
        this.profileDoc.update({about: this.desc});
        this.desc = '';
        this.disp();
    }

    // updateFirstName() {
    //     const x = 'profiles/' + this.id;
    //     this.profileDoc = this.afs.doc(x);
    //     console.log(this.profileDoc);
    //     console.log(this.ob);
    //     // this.ob.firstName = this.name1;
    //     // this.profileDoc.update(this.ob);
    // }
    //
    // updateLastName() {
    //     const x = 'profiles/' + this.id;
    //     this.profileDoc = this.afs.doc(x);
    //     console.log(this.profileDoc);
    //     this.ob.lastName = this.name2;
    //     this.profileDoc.update(this.ob);
    // }
}
