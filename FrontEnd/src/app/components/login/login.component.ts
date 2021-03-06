import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private alertService: AlertService) { }

  user: string;
  senha: string;

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  login(): void {
    this.jwtService.login(this.user, this.senha).subscribe(
      res => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error('Usuário ou senha inválidos');
      }
    );
  }
}
