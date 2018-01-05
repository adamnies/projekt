import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {SessionServiceProvider} from '../../providers/session-service/session-service';
import {NavController} from 'ionic-angular';


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
        id?: number;
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

interface Comment {
    id: string;
    author: string;
    content: string;
}

@Component({
    selector: 'page-newpost',
    templateUrl: 'newpost.html'
})
export class NewpostPage implements OnInit {
    user;
    postsCollection: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;

    p1: Post = {
        author: '',
        comments: {
            author: '',
            content: '',
            likes: 0
        },
        content: '',
        date: new Date(),
        likes: 0,
        dislikes: 0,
        img: '',
        email: ''
    };

    postDoc: AngularFirestoreDocument<Post>;
    post: Observable<Post>;

    imageUrl: string;
    showImage: false;
    showInputUrl: true;
    date: Date = new Date(2012, 11, 1);

    profileCollection: AngularFirestoreCollection<Profile>;
    profiles: Observable<Profile[]>;
    snapshot: any;
    of;
    ol;
    userImg;

    constructor(private afs: AngularFirestore,
                private sessionService: SessionServiceProvider,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        this.user = this.sessionService.user.email;
        this.userImg = this.sessionService.user;
        this.p1.email = this.user;
        this.postsCollection = this.afs.collection('posts');
        this.posts = this.postsCollection.valueChanges();

        this.p1.author = this.sessionService.user;
        console.log('co');
        this.profileCollection = this.afs.collection('profiles', ref => {
            return ref.where('email', '==', this.user);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(changes => {
                    return changes.map(a => {
                        const data = a.payload.doc.data() as Profile;
                        data.id = a.payload.doc.id;
                        console.log(data);
                        this.of = data.firstName;
                        this.ol = data.lastName;
                        this.userImg = data.img;
                        return data;
                    });
                }
            );
    }

    like(index) {

    }

    dislike(index) {
        console.log(index);
    }

    addPost() {
        console.log(this.p1);
        console.log('elo' + this.userImg);
        this.p1.author = this.of + ' ' + this.ol;
        this.p1.img = this.userImg;
        this.postsCollection.add(this.p1)
            .then(e => {
                console.log('dodane');
                this.navCtrl.pop();
            })
            .catch(e => console.error(e));

    }
}
