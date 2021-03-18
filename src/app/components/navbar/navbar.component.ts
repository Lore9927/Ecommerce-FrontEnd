import { JwtService } from './../../utils/jwt.service';
import { CarrelloService } from './../../services/carrello.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private carrelloServ: CarrelloService,
    private router: Router,
    private jwtServ: JwtService
  ) { }

  ngOnInit(): void {
    this.getBadge();
  }

  getBadge() {
    return this.carrelloServ.getBadge();
  }

  viewCart() {
    this.router.navigate(['carrello']);
  }

  viewItems() {
    this.router.navigate(['articoli']);
  }
}
