import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Locacao } from 'src/app/models/locacao';

@Component({
  selector: 'app-locacoes',
  templateUrl: './locacoes.component.html',
  styleUrls: ['./locacoes.component.css']
})
export class LocacoesComponent implements OnInit {

  locacoes:Locacao[] = [];

  constructor(private api:ApiService,  private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  async getData(){
    this.locacoes = await this.api.getLocacoes().toPromise();
    console.log(this.locacoes);
  }
}
