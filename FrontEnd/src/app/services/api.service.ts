import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Cliente } from '../models/cliente';


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
    const url = '${apiURL}/clientes';
    return this.http.get<Cliente[]>(url)
      .pipe(
        catchError(this.handleError('getClientes', []))
      );
  }
}
