import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListConsultantComponent } from './components/list-consultant/list-consultant.component';
import { DetailConsultantComponent } from './components/detail-consultant/detail-consultant.component';
import { NgModule } from '@angular/core';

/** Rutas */
export const consultantRoutes: Routes = [
    {
        path: '',
        component: ListConsultantComponent
    },
    {
      path: ':id',
      component: DetailConsultantComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(consultantRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConsultantRoutingModule { }
