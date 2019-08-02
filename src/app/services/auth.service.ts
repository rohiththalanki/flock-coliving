import {Injectable} from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database-deprecated';
import {AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  loading = false;
  constructor(   public afAuth: AngularFireAuth,
                 public afs: AngularFirestoreModule,
                 private router: Router,
                 ) {}

  login(email, password) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.loading = true;
        console.log('Successfully logged in.');
        this.router.navigate(['home/dashboard']);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  checklogin() {
    if (this.afAuth.auth.currentUser) {
      this.router.navigate(['home/dashboard']);
    }
    return true;
  }




  signOut() {
    this.afAuth.auth.signOut().then(() => {
      console.log('Logged out');
      this.router.navigate(['auth']);
    });
  }

  public isAuthenticated() {
    if (this.afAuth.auth.currentUser) {
      return true;
    } else {
      return false;
    }
  }
}
