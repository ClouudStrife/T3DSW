import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { LocadorasComponent } from './components/locadoras/locadoras.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraEdicaoComponent } from './components/locadora-edicao/locadora-edicao.component';
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';


const routes: Routes = [
  { path:'clientes', canActivate: [AuthGuard],component:ClientesComponent },
  { path:'cadastro-cliente', canActivate: [AuthGuard],component:ClienteCadastroComponent },
  { path: 'edita-cliente/:id', canActivate: [AuthGuard], component: ClienteEdicaoComponent },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'locadoras', canActivate: [AuthGuard], component:LocadorasComponent },
  { path: 'cadastro-locadora', canActivate: [AuthGuard], component:LocadoraCadastroComponent },
  { path: 'edita-locadora/:id', canActivate: [AuthGuard], component:LocadoraEdicaoComponent },
  { path: 'cadastro-locacao', component:LocacaoCadastroComponent },

  { path:'', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
