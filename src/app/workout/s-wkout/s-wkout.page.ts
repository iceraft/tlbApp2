import { Component, OnInit } from '@angular/core';
import { Test, WkRegimateService } from './../../services/wk-regimate.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-s-wkout',
  templateUrl: './s-wkout.page.html',
  styleUrls: ['./s-wkout.page.scss'],
})
export class SWkoutPage implements OnInit {

  test: Test = {
  task: 'any',
  createdAt: new Date().getTime(),
  priority: 2
  };

  testId = null;

  constructor(private route: ActivatedRoute,
   private nav: NavController,
   private testService: TestService,
   private loadingController: LoadingController) { }

  ngOnInit() {
  	this.testId = this.route.snapshot.params['id'];
    if (this.testId)  {
      this.loadTest();
  	}
  }

  async loadTest() {
    const loading = await this.loadingController.create({
      message: 'Loading Test..'
    });
  await loading.present();

  if (this.testId) {
      this.testService.updateTodo(this.test, this.testId).then(() => {
        loading.dismiss();
        this.nav.back('workout');
      });
    } else {
      this.testService.addTest(this.test).then(() => {
        loading.dismiss();
        this.nav.back('workout');
      });
    }
  }


}