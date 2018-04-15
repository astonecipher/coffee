import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

}