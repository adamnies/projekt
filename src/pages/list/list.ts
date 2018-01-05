import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {NewpostPage} from '../newpost/newpost';
import {SessionServiceProvider} from '../../providers/session-service/session-service';


interface Profile {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    img: string;
    about: string;
}

interface Post {
    id?: string;
    author: string;
    comments: {
        id: number;
        author: string;
        content: string;
        likes: number;
    };
    content: string;
    date: Date;
    likes: number;
    dislikes: number;
    img?: string;
    email: string;

}

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;
    myInput;
    showUser = false;
    profileCollection: AngularFirestoreCollection<Profile>;
    profiles: Observable<Profile[]>;
    profileDoc: AngularFirestoreDocument<Profile>;
    profile: Observable<Profile>;
    snapshot: any;
    id;
    ob: Profile;
    desc;
    of;
    ol;
    oe;
    oa;
    oi;
    postsCollection: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;
    user;
    user1;
    user2;
    postDoc;
    superArray = [];
    superArray2 = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private afs: AngularFirestore,
                private sessionService: SessionServiceProvider) {

    }

    searchUser() {
        this.profileCollection = this.afs.collection('profiles', ref => {
            return ref.where('email', '==', this.myInput);
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

        this.postsCollection = this.afs.collection('posts', ref => {
            return ref.where('email', '==', this.myInput);
        });
        // this.posts = this.postsCollection.valueChanges();
        this.posts = this.postsCollection.snapshotChanges()
            .map(changes => {
                    return changes.map(a => {
                        const data = a.payload.doc.data() as Post;
                        this.superArray.push(a.payload.doc.id);
                        this.superArray2.push(a.payload);
                        data.id = a.payload.doc.id;
                        return data;
                    });
                }
            );
        this.showUser = true;
    }


    like(post, index) {
        const id = this.superArray[index];
        this.postDoc = this.afs.doc('posts/' + id);
        const x = post;
        x.likes = x.likes + 1;
        this.postDoc.update(x);

    }

    dislike(post, index) {
        const id = this.superArray[index];
        this.postDoc = this.afs.doc('posts/' + id);
        post.dislikes = post.dislikes - 1;
        this.postDoc.update(post);

    }

    newPost() {
        this.navCtrl.push(NewpostPage);
    }
}
