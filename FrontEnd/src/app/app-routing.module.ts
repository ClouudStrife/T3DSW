import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth-guard';


const routes: Routes = [
  { path:'clientes', canActivate: [AuthGuard],component:ClientesComponent },
  { path:'cadastro-cliente', canActivate: [AuthGuard],component:ClienteCadastroComponent },
  { path: 'edita-cliente/:id', canActivate: [AuthGuard], component: ClienteEdicaoComponent },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },

  { path:'', redirectTo:'/clientes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
