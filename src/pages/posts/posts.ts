import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {NewpostPage} from '../newpost/newpost';
import {NavController} from 'ionic-angular';
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

interface Comment {
    id: string;
    author: string;
    content: string;
}

@Component({
    selector: 'page-posts',
    templateUrl: 'posts.html'
})
export class PostsPage implements OnInit {
    postsCollection: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;
    profileCollection: AngularFirestoreCollection<Profile>;
    profiles: Observable<Profile[]>;
    user;
    user1;
    snapshot: any;
    of;
    ol;
    user2;
    postDoc;
    superArray = [];
    superArray2 = [];

    constructor(private afs: AngularFirestore,
                private navCtrl: NavController,
                private sessionService: SessionServiceProvider) {
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
                        console.log(data);
                        this.of = data.firstName;
                        this.ol = data.lastName;
                        return data;
                    });
                }
            );

        this.user1 = this.of + ' ' + this.ol;
        console.log('szukam dla: ' + this.user1);
        this.user2 = JSON.stringify(this.user1);
        console.log(this.user2);
        this.postsCollection = this.afs.collection('posts', ref => {
            return ref.where('email', '==', this.sessionService.user.email);
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
