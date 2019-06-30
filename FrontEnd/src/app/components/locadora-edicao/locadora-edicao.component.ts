import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locadoraForm = this.formBuilder.group({
      nome: [null, Validators.required],
      cnpj: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      cidade: [null, Validators.required],
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
