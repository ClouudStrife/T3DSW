import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T3DSW';

  constructor(private jwtService: JwtService, private router: Router) {}

  logout() {
    this.jwtService.logout();
    this.router.navigate(['/login']);
  }

  r2(destination: String) {
    this.router.navigate([destination])
  }

  
  public get showLogin(): boolean {
    return !this.loggedIn && !this.inLogin;
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('authentication') !== null;
  }
  public get inLogin(): boolean {
    return this.router.url.startsWith('/login');
  }
}
