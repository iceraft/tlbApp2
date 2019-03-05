import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'h-wkout',
    pathMatch: 'full'
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },

  { path: 'h-wkout', loadChildren: './workout/h-wkout.module#HWkoutPageModule' },

  { path: 'a-wkout', loadChildren: './workout/a-wkout/a-wkout.module#AWkoutPageModule' },

  { path: 'e-wkout', loadChildren: './workout/e-wkout/e-wkout.module#EWkoutPageModule' },

  { path: 's-wkout', loadChildren: './workout/s-wkout/s-wkout.module#SWkoutPageModule' },
  { path: 's-wkout/:id', loadChildren: './workout/s-wkout/s-wkout.module#SWkoutPageModule' },
  
  { path: 'p-wkout', loadChildren: './workout/p-wkout/p-wkout.module#PWkoutPageModule' },
  { path: 'alarms', loadChildren: './alarms/alarms.module#AlarmsPageModule' },
  { path: 'a-alarms', loadChildren: './alarms/a-alarms/a-alarms.module#AAlarmsPageModule' },
  { path: 'e-alarms', loadChildren: './alarms/e-alarms/e-alarms.module#EAlarmsPageModule' },
  { path: 'terms-nc', loadChildren: './terms-nc/terms-nc.module#TermsNcPageModule' },
  { path: 'e-prof', loadChildren: './profile/e-prof/e-prof.module#EProfPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
