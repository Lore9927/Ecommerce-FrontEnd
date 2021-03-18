import { ArticoloComponent } from './components/articolo/articolo.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'articoli', component: ArticoloComponent},
    {path: 'carrello', component: CarrelloComponent}
]