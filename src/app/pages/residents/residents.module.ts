import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule,  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
  NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResidentsRoutingModule, routedComponents } from './residents-routing.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule,
    NbStepperModule,
    NbSelectModule,
    NbRadioModule,
    Ng2SmartTableModule,
    ResidentsRoutingModule,
    NbButtonModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ResidentsModule { }
