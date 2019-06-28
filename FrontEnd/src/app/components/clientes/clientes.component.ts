import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Cliente } from '../../models/cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  colunasTabela: string[] = ['Nome', 'CPF', 'Email', 'Telefone', 'Data de Nascimento'];
  clientes: Cliente[] = [];
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
