import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Test, WkRegimateService } from '../wk-regimate.service';

@Component({
  selector: 'app-h-wkout',
  templateUrl: './h-wkout.page.html',
  styleUrls: ['./h-wkout.page.scss'],
})
export class HWkoutPage implements OnInit {
	
  test: Test[];	

  constructor(	private testService: WkRegimateService,
  				public afAuth: AngularFireAuth,) { }

  ngOnInit() {
  	this.testService.getTests().subscribe(res => {
    this.test = res;
    });
  }

  remove(item) {
    this.testService.removeTest(item.id);
  }
}
