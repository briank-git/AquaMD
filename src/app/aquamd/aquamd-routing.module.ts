import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsListComponent } from './symptoms-list/symptoms-list.component';


const routes: Routes = [
  { path: 'aquamd', component: SymptomsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AquamdRoutingModule { }
