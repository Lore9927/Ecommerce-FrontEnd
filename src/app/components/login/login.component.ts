import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { JwtService } from 'src/app/utils/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nome: string;
  password: string;
  showErrorMessage: boolean;

  constructor(
    private loginServ: LoginService,
    private jwtServ: JwtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showErrorMessage = false;
  }
  login() {
    let loginObs = this.loginServ.login(this.nome, this.password);
    loginObs.subscribe(
      (data) => {
        this.jwtServ.storeJWTToken(data);
        this.router.navigate(['articoli']);
      },
      (error) => {
        this.showErrorMessage = true;
      }
    );
  }
}
