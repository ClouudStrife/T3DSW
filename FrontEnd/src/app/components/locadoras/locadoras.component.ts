import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Locadora } from '../../models/locadora';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-locadoras',
  templateUrl: './locadoras.component.html',
  styleUrls: ['./locadoras.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class LocadorasComponent implements OnInit {

  colunasTabela: string[] = ['ID', 'Nome', 'CNPJ', 'Email', 'Cidade'];
  locadoras: Locadora[] = [];
  isLoading = true;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.locadoras = await this.api.getLocadoras().toPromise();
    this.isLoading = false;
  }

  deleteLocadora(id) {
    this.api.deleteLocadora(id)
      .subscribe(res => {
        this.getData();
      }, (err) => {
        console.error(err);
      }
      );
  }

}
