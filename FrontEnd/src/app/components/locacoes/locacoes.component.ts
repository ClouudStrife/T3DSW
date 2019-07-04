import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Locacao } from 'src/app/models/locacao';

@Component({
  selector: 'app-locacoes',
  templateUrl: './locacoes.component.html',
  styleUrls: ['./locacoes.component.css']
})
export class LocacoesComponent implements OnInit {

  locacoes:Locacao[] = [];
  filtro:Locacao[] = [];
  user:String;

  constructor(private api:ApiService,  private router: Router) { }

  ngOnInit() {
    this.getData();
    this.getUser();
  }

  async getData(){
    this.locacoes = await this.api.getLocacoes().toPromise();
    if(this.getRole() == "ROLE_CLIENTE"){
      this.filtro = this.locacoes.filter(res => res.cpfCliente == localStorage.getItem('user'));
    }
    else if(this.getRole() == "ROLE_LOCADORA"){
      console.log("oi");
      this.filtro = this.locacoes.filter(res => res.cnpjLocadora == localStorage.getItem('user'));
    }
    else{
      this.filtro = null;
    }
    console.log(this.locacoes);
    console.log(this.filtro);
  }

  getUser(){
    return localStorage.getItem('user');
  }

  getRole(){
    return localStorage.getItem('Role');
  }
}
