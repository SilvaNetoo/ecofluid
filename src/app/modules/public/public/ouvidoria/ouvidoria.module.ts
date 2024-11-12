import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuvidoriaComponent } from './ouvidoria.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: OuvidoriaComponent }
];

@NgModule({
  declarations: [
    OuvidoriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OuvidoriaModule { }
