import { CarrelloService } from './../../services/carrello.service';
import { JwtService } from './../../utils/jwt.service';
import { ArticoloService } from './../../services/articolo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  articoli = [];
  token: string;
  dettagli = [];
  errorMessage: boolean;

  constructor(
    private articoloServ: ArticoloService,
    private jwtSer: JwtService,
    private carrelloServ: CarrelloService
  ) { }

  ngOnInit(): void {
    this.token = this.jwtSer.retrieveJWTToken();
    this.findAll();
    this.checkCart();
    this.errorMessage = false;
  }

  findAll() {
    let articoloObs = this.articoloServ.findAll(this.token);
    articoloObs.subscribe(
      (data) => {
        this.articoli = data;
      },
      (error) => {
        this.errorMessage = true;
      }
    );
  }

  addItemToCart(codiceArticolo: string, quantita: number) {
    let articoloObs = this.carrelloServ.addItemToCart(codiceArticolo, quantita, this.token);
    articoloObs.subscribe(
      (data) => {
        this.dettagli = data.dettagli;
        this.carrelloServ.updateBadge(this.dettagli)
      }
    );

  }

  checkCart() {
    let dettagli = []
    let articoloObs = this.carrelloServ.checkCart(this.token);
    articoloObs.subscribe(
      (data) => {
        dettagli = data.dettagli;
        this.carrelloServ.updateBadge(dettagli);
      },
      (error) => {
        this.carrelloServ.setBadge(0);
      }
    );
  }
}
