import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },

  { path: 'h-wkout', loadChildren: './h-wkout/h-wkout.module#HWkoutPageModule' },

  { path: 'a-wkout', loadChildren: './a-wkout/a-wkout.module#AWkoutPageModule' },

  { path: 'e-wkout', loadChildren: './e-wkout/e-wkout.module#EWkoutPageModule' },

  { path: 's-wkout', loadChildren: './s-wkout/s-wkout.module#SWkoutPageModule' },
  
  { path: 'p-wkout', loadChildren: './p-wkout/p-wkout.module#PWkoutPageModule' },
  { path: 'alarms', loadChildren: './alarms/alarms.module#AlarmsPageModule' },
  { path: 'a-alarms', loadChildren: './a-alarms/a-alarms.module#AAlarmsPageModule' },
  { path: 'e-alarms', loadChildren: './e-alarms/e-alarms.module#EAlarmsPageModule' },
  { path: 'terms-nc', loadChildren: './terms-nc/terms-nc.module#TermsNcPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
