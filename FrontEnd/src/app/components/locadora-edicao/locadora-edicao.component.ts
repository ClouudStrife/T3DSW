import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

import { Locadora } from '../../models/locadora';

@Component({
  selector: 'app-locadora-edicao',
  templateUrl: './locadora-edicao.component.html',
  styleUrls: ['./locadora-edicao.component.css']
})
export class LocadoraEdicaoComponent implements OnInit {

  locadoraForm: FormGroup;
  idLocadora: any;
  validation_messages = {
    nome: [
      { type: 'required', message: 'Nome é obrigatório !' },
    ],
    email: [
      { type: 'required', message: 'Email é um campo obrigatório !' },
      { type: 'pattern', message: 'Entre com um email válido !' }
    ],
    senha: [
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

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locadoraForm = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      senha: new FormControl('', Validators.compose([
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

    console.log(this.route.snapshot.params['id']);
    this.getData(this.route.snapshot.params['id']);
  }

  async getData(id) {
    let locadora: Locadora = await this.api.getLocadora(id).toPromise();
    this.idLocadora = locadora.id;
    this.locadoraForm.setValue({
      nome: locadora.nome,
      email: locadora.email,
      senha: locadora.senha,
      cnpj: locadora.cnpj,
      cidade: locadora.cidade,
    });  
  }

  onFormSubmit(form: NgForm) {
    this.api.editLocadora(this.idLocadora, form)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/locadoras']);
      }, (err) => {
        console.log(err);
      }); 
  }

}
