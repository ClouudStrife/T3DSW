import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Autenticacao } from '../models/autenticacao';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  login(documento: string, senha: string) {
    const url = 'http://localhost:8080/login';
    return this.httpClient.post<Autenticacao>(url, { documento, senha }).pipe(tap(res => {
      
      if (JSON.parse(JSON.stringify(res))['erro'] === true)
        throw res

        res.when = new Date();
        console.log(res);
        localStorage.setItem('authentication', JSON.stringify(res));
      }));
  }

  logout() {
    localStorage.removeItem('authentication');
  }

  getAuthentication(): Observable<Autenticacao> {
    const token = localStorage.getItem('refresh_token');
    const payload = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', token);
    const url = 'http://localhost:8080/oauth/access_token';
    return this.httpClient.post<Autenticacao>(url, payload).pipe(
      tap(_ => console.debug('getAuthentication'))
    );
  }

  async refreshToken() {
    const auth: Autenticacao = await this.getAuthentication().toPromise();
    auth.when = new Date();
    localStorage.setItem('authentication', JSON.stringify(auth));
    console.debug('RefreshToken(): I will wait until promise is resolved..');
  }


  public get loggedIn(): boolean {
    const hasToken: boolean = localStorage.getItem('authentication') !== null;
    if (hasToken) {
      const auth = JSON.parse(localStorage.getItem('authentication'));
      const date1: number = new Date(auth.when).getTime() / 1000 + auth.expires_in;
      const date2: number = new Date().getTime() / 1000;
      if (date1 < date2) {
        console.debug('token expired... refreshing token');
        this.refreshToken();
      }
    }
    return hasToken;
  }
}
