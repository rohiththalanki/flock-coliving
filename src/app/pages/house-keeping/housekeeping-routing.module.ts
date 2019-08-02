import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseKeepingComponent } from './housekeeping.component';
import { StaffTableComponent } from './staff-table/staff-table.component';

const routes: Routes = [{
  path: '',
  component: HouseKeepingComponent,
  children: [
    {
      path: 'staff',
      component: StaffTableComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousekeepingRoutingModule { }

export const routedComponents = [
  HouseKeepingComponent,
  StaffTableComponent,
];
