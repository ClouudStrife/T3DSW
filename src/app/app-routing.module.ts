import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  { path:'clientes', component:ClientesComponent, data:{ title:'OLA'} },
  { path:'', redirectTo:'/clientes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
