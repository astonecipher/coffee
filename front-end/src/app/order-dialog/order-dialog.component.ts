import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyDialogComponent } from '../my-dialog/my-dialog.component';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

	items: Observable<any[]>;
	AF: AngularFirestoreCollection<any>;

	dialogResult = "";

  constructor(public dialog: MatDialog, db: AngularFirestore) { 
  	this.items = db.collection('users').valueChanges();
    this.AF = db.collection('users');
  }

  ngOnInit() {
  }

  openDialog() {
  	let dialogRef = this.dialog.open(MyDialogComponent, {
  		width: '600px',
  		data: 'Woohoo I did something'
  	});

  	dialogRef.afterClosed().subscribe(result => {
  		console.log('Dialog closed: ${result}');
  		this.dialogResult = result;
  	})
  }

}

