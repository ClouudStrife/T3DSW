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
const apiURL = "http://localhost:8080";

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
    const url = apiURL + "/Cliente";
    return this.http.get<Cliente[]>(url)
      .pipe(
        catchError(this.handleError('getClientes', []))
      );
  }

  getCliente(id:number): Observable < Cliente > {
    const url = apiURL + "/Cliente/" + id;
    return this.http.get<Cliente>(url).pipe(
      catchError(this.handleError<Cliente>('getCliente'))
    );
  }

  addCliente(cliente): Observable<Cliente> {
    const url = apiURL + "/Cliente";
    return this.http.post<Cliente>(url, cliente, httpOptions).pipe(
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  editCliente(id, cliente): Observable<Cliente> {
    cliente.id = id;
    console.log(cliente);
    const url = apiURL + "/Cliente/" + id;
    return this.http.put<Cliente>(url, cliente, httpOptions).pipe(
      catchError(this.handleError<Cliente>('editCliente'))
    );
  }

  deleteCliente(id): Observable<Cliente> {
    console.log(id);
    const url = apiURL + "/Cliente/" + id;
    return this.http.delete<Cliente>(url, httpOptions).pipe(
      catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }

  // Locadora
  getLocadoras(): Observable < Locadora[] > {
    const url = apiURL + "/Locadora";
    return this.http.get<Locadora[]>(url)
      .pipe(
        catchError(this.handleError('getLocadoras', []))
      );
  }

  getLocadora(id:number): Observable <Locadora> {
    const url = apiURL + "/Locadora/" + id;
    return this.http.get<Locadora>(url)
      .pipe(
        catchError(this.handleError<Locadora>('getLocadora'))
      );
  }

  addLocadora(locadora): Observable<Locadora> {
    const url = apiURL + "/Locadora";
    return this.http.post<Locadora>(url, locadora, httpOptions).pipe(
      catchError(this.handleError<Locadora>('addLocadora'))
    );
  }

  deleteLocadora(id): Observable<Locadora> {
    const url = apiURL + "/Locadora/" + id;
    return this.http.delete<Locadora>(url, httpOptions).pipe(
      catchError(this.handleError<Locadora>('deleteLocadora'))
    );
  }

  editLocadora(id, locadora): Observable<Locadora> {
    locadora.id = id;
    const url = apiURL + "/Locadora/" + id;
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

  deleteLocacao(locacao): Observable<Locacao> {
    const url = apiURL + "/" + locacao.id;
    return this.http.delete<Locacao>(url, httpOptions).pipe(
      catchError(this.handleError<Locacao>('deleteLocacao'))
    );
  }  
}
