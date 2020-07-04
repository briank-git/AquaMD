import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AquamdRoutingModule } from './aquamd-routing.module';
import { SymptomsListComponent } from './symptoms-list/symptoms-list.component';


@NgModule({
  declarations: [SymptomsListComponent],
  imports: [
    CommonModule,
    AquamdRoutingModule
  ]
})
export class AquamdModule { }
