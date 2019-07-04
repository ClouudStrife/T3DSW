import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Cliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  clienteForm: FormGroup;
  clientes: Cliente[];
  isLoadingResults = false;
  validation_messages = {
    nome: [
      { type: 'required', message: 'Nome é obrigatório !' },
      { type: 'minlength', message: 'Nome deve ter pelo menos 5 caracteres!' },
      { type: 'pattern', message: 'Deve haver pelomenos 1 sobrenome!' },
    ],
    email: [
      { type: 'required', message: 'Email é um campo obrigatório !' },
      { type: 'pattern', message: 'Entre com um email válido !' }
    ],
    password: [
      { type: 'required', message: 'Senha é um campo obrigatório !' },
      { type: 'minlength', message: 'Senha deve ter pelo menos 5 caracteres!' },
      { type: 'pattern', message: 'Senha deve conter 1 letra maiúscula, 1 letra minúscula e 1 número!' }
    ],
    cpf: [
      { type: 'required', message: 'CPF é um campo obrigatório !' },
      { type: 'minlength', message: 'Entre com um CPF válido!' },
    ],
    telefone: [
      { type: 'minlength', message: 'Entre com um telefone válido!' },
    ],
    data_nascimento: [
      { type: 'required', message: 'Data de nascimento é um campo obrigatório !' },
      { type: 'pattern', message: 'Data inválida!' },
      { type: 'minlength', message: 'Entre com um telefone válido!' },
    ],
    sexo: [
      { type: 'required', message: 'Sexo é um campo obrigatório !' },
    ],
  };


  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$'),
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$'),
        Validators.required,
      ])),
      cpf: new FormControl('', Validators.compose([
        Validators.minLength(11),
        Validators.required,
      ])),
      telefone: new FormControl('', Validators.compose([
        Validators.minLength(11),
      ])),
      data_nascimento: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/(19|20)[0-9]{2}$'),
      ])),
      sexo: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });

  
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCliente(form)
      .subscribe(res => {
        console.log("Res backend = " + res);
        this.router.navigate(['/clientes']);
      }, (err) => {
        console.error(err);
        this.isLoadingResults = false;
      });
  }

}
