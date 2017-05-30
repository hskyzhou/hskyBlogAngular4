import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRouterModule } from './app-routing.module';

import { WorkService } from './work.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { TodayWorkCreateComponent } from './today/today-work-create.component';
import { TodayWorkUpdateComponent } from './today/today-work-update.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TodayComponent,
    WeekComponent,
    TodayWorkCreateComponent,
    TodayWorkUpdateComponent
  ],
  bootstrap: [ AppComponent ],
  providers : [
    WorkService
  ]
})
export class AppModule { }