import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Cliente } from '../../models/cliente';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
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
