import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Locadora } from 'src/app/models/locadora';

@Component({
  selector: 'app-locadora-cadastro',
  templateUrl: './locadora-cadastro.component.html',
  styleUrls: ['./locadora-cadastro.component.css']
})
export class LocadoraCadastroComponent implements OnInit {

  locadoraForm: FormGroup;
  locadoras: Locadora[];
  isLoadingResults = false;
  validation_messages = {
    nome: [
      { type: 'required', message: 'Nome é obrigatório !' },
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
    cnpj: [
      { type: 'required', message: 'CNPJ é um campo obrigatório !' },
      { type: 'pattern', message: 'Entre com um CNPJ válido !' }
    ],
    cidade: [
      { type: 'required', message: 'Cidade é um campo obrigatório !' },
    ],
  }

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locadoraForm = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
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
      cnpj: new FormControl('', Validators.compose([
        Validators.pattern('^(\\d{2}[-.\\s]?\\d{3}[-.\\s]?\\d{3}[-.\\s\\/]?\\d{4}[-.\\s]?\\d{2})$'),
        Validators.required,
      ])),
      cidade: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addLocadora(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/locadoras']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }); 
  }

}
