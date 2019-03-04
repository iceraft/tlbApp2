import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-h-wkout',
  templateUrl: './h-wkout.page.html',
  styleUrls: ['./h-wkout.page.scss'],
})
export class HWkoutPage implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

}
