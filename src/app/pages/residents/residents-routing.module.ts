import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentsComponent } from './residents.component';
import { ResidentsListComponent} from './residents-list/residents-list.component';
import { AddNewComponent} from './addNew/addNew.component';

const routes: Routes = [{
  path: '',
  component: ResidentsComponent,
  children: [
    {
      path: 'add-new',
      component: AddNewComponent,
    },
    {
      path: 'list',
      component: ResidentsListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentsRoutingModule { }

export const routedComponents = [
  ResidentsComponent,
  ResidentsListComponent,
  AddNewComponent,
];
