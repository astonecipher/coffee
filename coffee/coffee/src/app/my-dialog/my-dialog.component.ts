import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

	items: Observable<any[]>;
	AF: AngularFirestoreCollection<any>;

  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string, db: AngularFirestore) {
  	this.items = db.collection('users').valueChanges();
    this.AF = db.collection('users');
  }

  ngOnInit() {
  }

  onCloseConfirm() {
  	this.thisDialogRef.close('Place Order')
  }

  onCloseCancel() {
  	this.thisDialogRef.close('Cancel')
  }

}
