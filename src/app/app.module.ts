import { CarrelloService } from './services/carrello.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { JwtService } from './utils/jwt.service';
import { ArticoloComponent } from './components/articolo/articolo.component';
import { ArticoloService } from './services/articolo.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrelloComponent } from './components/carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticoloComponent,
    NavbarComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [LoginService, JwtService, ArticoloService, CarrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
