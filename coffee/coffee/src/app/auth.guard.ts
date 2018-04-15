import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
	
	constructor(private auth: AuthService, private router: Router) {}
  
  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | boolean {


  if (this.auth.afAuth.auth.currentUser) { // If a user is logged in

      if (this.auth.afAuth.auth.currentUser.email.endsWith("@uaschools.org")) { // If a user is from upper arlington
      
        return this.auth.user.take(1).map(user => !!user)
          .do(loggedIn => {
            if (!loggedIn) {
              console.log('Access Denied')
            }
          })

        }
          window.alert('Only students from Upper Arlington are authorized to use the customization pane');
          return false;
  } else {
      window.alert('Please login');
      return false;
  }



}
    
}
