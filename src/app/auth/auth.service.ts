import { Router } from '@angular/router';
import { Injectable } from "@angular/core";

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,
    AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({ providedIn: 'root'})
export class AuthService {
    user$: Observable<firebase.User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ){
      this.user$ = this.afAuth.authState;
    }

    async signup(email: string, password: string) {
        await this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
            })
            .catch(err => {
                console.log('Something went wrong:',err.message);
            });
    }

    async loginNormal(email, pass){
        await this.afAuth.signInWithEmailAndPassword(email, pass).then((data) => {
            localStorage['token'] = data.user.uid;
            this.router.navigate(['/dashboard']);

        }).catch((error) => {
            console.log(error);
            this.router.navigate(['/login']);
        });
    }

    public logout() {
        console.log('logout');
        return this.afAuth.signOut();
    }

    async googleSignin(){
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
    }

    async signOut(){
        await this.afAuth.signOut();
        return this.router.navigate(['/']);
    }

    private updateUserData(user){
        console.log(user);
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        console.log('userRef');
        console.log(userRef);

        const data = {
            uid: user.uid,
            name: user.name,
            email: user.email,
          }

        return userRef.set(data, { merge: true});
    }

}