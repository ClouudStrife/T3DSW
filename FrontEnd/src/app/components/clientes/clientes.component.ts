import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Cliente } from '../../models/cliente';

export interface PeriodicElement {
  nome: string;
  sobrenome: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 'Hydrogen', sobrenome: "SOBRE", email: 'H'},
  {nome: 'Helium', sobrenome: "SOBRE", email: 'He'},
  {nome: 'Lithium', sobrenome: "SOBRE", email: 'Li'},
  {nome: 'Beryllium', sobrenome: "SOBRE", email: 'Be'},
  {nome: 'Boron', sobrenome: "SOBRE", email: 'B'},
  {nome: 'Carbon', sobrenome: "SOBRE", email: 'C'},
  {nome: 'Nitrogen', sobrenome: "SOBRE", email: 'N'},
  {nome: 'Oxygen', sobrenome: "SOBRE", email: 'O'},
  { nome: 'Fluorine', sobrenome: "SOBRE", email: 'F'},
  {nome: 'Neon', sobrenome: "SOBRE", email: 'Ne'},
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  colunasTabela: string[] = ['Nome', 'Sobrenome', 'Email'];
  clientes: Cliente[] = [];
  dataSource = ELEMENT_DATA;
  isLoading = true;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData(){
    this.clientes = await this.api.getClientes().toPromise();
    this.isLoading = false;
  }
  
}
