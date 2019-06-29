import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Cliente } from '../models/cliente';
import { Locadora } from '../models/locadora';
import { Locacao } from '../models/locacao';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiURL = "http://localhost:8080/Cliente";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //Msg se der erro
      console.log(error);

      return of(result as T);
    }
  }

  //Operações de CRUD de Cliente

  //Get clientes
  getClientes(): Observable < Cliente[] > {
    const url = apiURL;
    return this.http.get<Cliente[]>(url)
      .pipe(
        catchError(this.handleError('getClientes', []))
      );
  }

  addCliente (cliente): Observable<Cliente> {
    const url = apiURL;
    return this.http.post<Cliente>(url, cliente, httpOptions).pipe(
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  editCliente(cliente): Observable<Cliente> {
    const url = apiURL;
    return this.http.put<Cliente>(url, cliente, httpOptions).pipe(
      catchError(this.handleError<Cliente>('editCliente'))
    );
  }

  // Locadora
  getLocadoras(): Observable < Locadora[] > {
    const url = apiURL;
    return this.http.get<Locadora[]>(url)
      .pipe(
        catchError(this.handleError('getLocadoras', []))
      );
  }

  addLocadora (locadora): Observable<Locadora> {
    const url = apiURL;
    return this.http.post<Locadora>(url, locadora, httpOptions).pipe(
      catchError(this.handleError<Locadora>('addLocadora'))
    );
  }

  deleteLocadora(locadora): Observable<Locadora> {
    const url = apiURL + "/" + locadora.id;
    return this.http.delete<Locadora>(url, httpOptions).pipe(
      catchError(this.handleError<Locadora>('deleteLocadora'))
    );
  }

  editLocadora(locadora): Observable<Locadora> {
    const url = apiURL;
    return this.http.put<Locadora>(url, locadora, httpOptions).pipe(
      catchError(this.handleError<Locadora>('editLocadora'))
    );
  }

  // Locacao
  getLocacoes(): Observable < Locacao[] > {
    const url = apiURL;
    return this.http.get<Locacao[]>(url)
      .pipe(
        catchError(this.handleError('getLocacoes', []))
      );
  }

  addLocacao(locacao): Observable<Locacao> {
    const url = apiURL;
    return this.http.post<Locacao>(url, locacao, httpOptions).pipe(
      catchError(this.handleError<Locacao>('addLocacao'))
    );
  }

  editLocacao(locacao): Observable<Locacao> {
    const url = apiURL;
    return this.http.put<Locacao>(url, locacao, httpOptions).pipe(
      catchError(this.handleError<Locacao>('editLocacao'))
    );
  }

}
