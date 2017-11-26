import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'consultant',
    loadChildren: 'app/consultant/consultant.module#ConsultantModule'
  },
  { path: '',   redirectTo: '/consultant', pathMatch: 'full' },
  { path: '**',   component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
