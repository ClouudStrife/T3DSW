import { Component, OnInit } from '@angular/core';
import { Locadora } from 'src/app/models/locadora';

import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Locacao } from 'src/app/models/locacao';

@Component({
  selector: 'app-locacao-cadastro',
  templateUrl: './locacao-cadastro.component.html',
  styleUrls: ['./locacao-cadastro.component.css']
})
export class LocacaoCadastroComponent implements OnInit {

  locadoras: Locadora[] = [];
  formLocacao: FormGroup;
  locadoraCNPJ:String;
  cpfCliente:String;
  locacao:Locacao;

  constructor(private router: Router, private api:ApiService,  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getData();
    this.formLocacao = this.formBuilder.group({
      data: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  async getData(){
    this.locadoras = await this.api.getLocadoras().toPromise();
    this.cpfCliente = localStorage.getItem('user');
  }

  selecionaLocadora(cnpj:String){
    this.locadoraCNPJ = cnpj;
  }

  alugar(form: NgForm){
    this.locacao = form.value;
    this.locacao.data = new Date(this.locacao.data.toString()).toLocaleDateString()
    this.locacao.cpfCliente = this.cpfCliente;
    this.locacao.cnpjLocadora = this.locadoraCNPJ;
    this.api.addLocacao(this.locacao)
      .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);    
      });    
  }

  r2Locacoes(){
    this.router.navigate(['/locacoes']);
  }
}
