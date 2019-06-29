import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';

const routes: Routes = [
  { path:'clientes', component:ClientesComponent },
  { path:'cadastro-cliente', component:ClienteCadastroComponent },
  { path: 'edita-cliente/:id', component: ClienteEdicaoComponent },
  { path:'', redirectTo:'/clientes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
