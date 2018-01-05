import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SessionServiceProvider} from '../session-service/session-service';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from 'angularfire2/auth';


interface Note {

}

interface User {
    password: string;
    email: string;
}

@Injectable()
export class SignServiceProvider {

  constructor(private sessionService: SessionServiceProvider,
              private angularFireAuth: AngularFireAuth) {
    console.log('Hello SignServiceProvider Provider');
  }

  register(user: User) {
      return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user: User) {
      return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

}
