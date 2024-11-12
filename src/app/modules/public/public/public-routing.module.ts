import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'sobre-nos', loadChildren: () => import('./sobre-nos/sobre-nos.module').then(m => m.SobreNosModule) },
      { path: 'ouvidoria', loadChildren: () => import('./ouvidoria/ouvidoria.module').then(m => m.OuvidoriaModule) },
      { path: 'servicos', loadChildren: () => import('./servicos/servicos.module').then(m => m.ServicosModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
