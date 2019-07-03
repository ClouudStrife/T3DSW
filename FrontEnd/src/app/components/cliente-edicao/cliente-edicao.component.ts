import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

import { Cliente } from '../../models/cliente';


@Component({
  selector: 'app-cliente-edicao',
  templateUrl: './cliente-edicao.component.html',
  styleUrls: ['./cliente-edicao.component.css']
})
export class ClienteEdicaoComponent implements OnInit {

  clienteForm: FormGroup;
  idCliente: any;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      telefone: [null, Validators.required],
      sexo: [null, Validators.required],
      data_nascimento: [null, Validators.required]
    });

    console.log(this.route.snapshot.params['id']);
    this.getData(this.route.snapshot.params['id']);
  }

  async getData(id) {
    let cliente: Cliente = await this.api.getCliente(id).toPromise();
    this.idCliente = cliente.id;
    this.clienteForm.setValue({
      nome: cliente.nome,
      email: cliente.email,
      password: cliente.password,
      cpf: cliente.cpf,
      telefone: cliente.telefone,
      sexo: cliente.sexo,
      data_nascimento: cliente.data_nascimento
    });  
  }

  onFormSubmit(form: NgForm) {
    this.api.editCliente(this.idCliente, form)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/clientes']);
      }, (err) => {
        console.log(err);
      }); 
  }

}
