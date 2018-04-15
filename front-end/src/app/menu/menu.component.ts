import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

items: Observable<any[]>;
AF: AngularFirestoreCollection<any>;

events: String[];

	
  


  
  constructor(db: AngularFirestore, private formBuilder: FormBuilder) {
    this.items = db.collection('users').valueChanges();
    this.AF = db.collection('users');
    
    
	var today = new Date().getDay();
	
	if (today==1) {
		this.events = ["7:30","7:35","7:40","7:45","7:50","7:55","8:00","4th","5th"];
	} else if (today==2) {
		this.events = ["7:30","7:35","7:40","7:45","7:50","7:55","8:00","4th","5th"];
	} else if (today==3) {
		this.events = ["7:45","7:50","7:55","8:00","8:05","8:10","8:15","8:20","8:25","8:30","4th","5th"];
	} else if (today==4) {
		this.events = ["7:45","7:50","7:55","8:00","8:05","8:10","8:15","8:20","8:25","8:30","4th","5th"];
	} else if (today==5) {
		this.events = ["7:30","7:35","7:40","7:45","7:50","7:55","8:00","4th","5th"];
	} else  {
		this.events = ["Sorry, UARise is closed"];
	} 


	
  }

  ngOnInit() {
  }

}
