import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    InfiniteScrollModule,
    ComponentsModule
  ]
})
export class PagesModule { }
