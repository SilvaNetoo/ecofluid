import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosComponent } from './sobre-nos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SobreNosComponent }
];

@NgModule({
  declarations: [
    SobreNosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SobreNosModule { }
