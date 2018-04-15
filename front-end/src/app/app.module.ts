import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { routes } from './app.router';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from './auth.service';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    OrderDialogComponent,
    MyDialogComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    routes,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [AuthService, AngularFireAuth],//Add authgaurd here
  bootstrap: [AppComponent]
})
export class AppModule { }
