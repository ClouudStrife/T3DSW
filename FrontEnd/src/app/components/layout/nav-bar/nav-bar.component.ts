import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { JwtService } from '../../../services/jwt.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  role = localStorage.getItem('Role');

  constructor(private jwtService: JwtService, private router: Router) {}

  logout() {
    this.jwtService.logout();
    this.router.navigate(['/login']);
  }

  r2(destination: String) {
    console.log(this.role);
    this.router.navigate([destination])
  }

  
  public get showLogin(): boolean {console.log(this.router.url)
    return !this.loggedIn && !this.inLogin;
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('authentication') !== null;
  }
  public get inLogin(): boolean {
    return this.router.url.startsWith('/login');
  }

}
