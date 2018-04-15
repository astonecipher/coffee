import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
/*import './interfaces';*/

interface User {
  name: string;
  email: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(public afAuth: AngularFireAuth, 
  			  private afs: AngularFirestore, 
  			  private router: Router) {
      this.user = this.afAuth.authState
        .switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`Users/${user.uid}`).valueChanges();
          } else {
            return Observable.of(null);
          }
        })

  }


  loginWithGoogle() {
    console.log("LoginWithGoogle");
    const provider = new firebase.auth.GoogleAuthProvider();
    /*provider.addScope('https://www.googleapis.com/auth/plus.login');*/
    return this.oAuthLogin(provider);
  }


  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      });
  }


  private updateUserData(user) {
    // Sets user data to firestore on login
    console.log(user.displayName);
    console.log('Hello');
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${user.uid}`);
    const data: User = {
      name: user.displayName,
      email: user.email
    }
    return userRef.set(data, {merge: true});
  }





  logout() {
    console.log("Logout")
    this.afAuth.auth.signOut();
  }

  get authenticated(): boolean {
    return this.afAuth.authState == null;
  }

}