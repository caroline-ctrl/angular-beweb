import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: AccueilComponent },// pour que la page d'ouverture soit la page d'accueil
  { path: '**', component: AccueilComponent }//pour que si l'utilisateur se trompe de chemin, le site le renvoie vers l'accueil
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
