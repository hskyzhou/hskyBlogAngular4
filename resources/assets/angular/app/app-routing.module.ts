import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
/*今日工作组件*/
import { TodayComponent } from './today/today.component';
import { TodayWorkCreateComponent } from './today/today-work-create.component';
/*本周工作组件*/
import { WeekComponent } from './week/week.component';

const routes = [
  {
    path : 'app',
    redirectTo: 'app/dashboard',
    pathMatch: 'full'
  },
  {
    path : 'app/dashboard',
    component : DashboardComponent
  },
  {
    path : 'app/today',
    component : TodayComponent
  },
  {
    path : 'app/today/create',
    component : TodayWorkCreateComponent
  },
  {
    path : 'app/week',
    component : WeekComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
  	RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }


