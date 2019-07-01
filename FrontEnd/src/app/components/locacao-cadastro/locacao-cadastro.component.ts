import { Component, OnInit } from '@angular/core';
import { Locadora } from 'src/app/models/locadora';

import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

export interface Locacao{
  cnpjLocadora: String
  cpfCliente: String
  dataHoraLocacao: String
}

@Component({
  selector: 'app-locacao-cadastro',
  templateUrl: './locacao-cadastro.component.html',
  styleUrls: ['./locacao-cadastro.component.css']
})
export class LocacaoCadastroComponent implements OnInit {

  locadoras: Locadora[] = [];
  locacao: Locacao;
  formLocacao: FormGroup;

  constructor(private api:ApiService,  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getData();
    this.formLocacao = this.formBuilder.group({
      data: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  async getData(){
    this.locadoras = await this.api.getLocadoras().toPromise();
  }

  selecionaLocadora(cnpj:String){

    console.log(cnpj);
  }

  alugar(form: NgForm){
    //this.locacao.dataHoraLocacao = form.value;
    console.log(form);
  }

}
