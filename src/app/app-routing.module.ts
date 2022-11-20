import { AboutusComponent } from './Composant/aboutus/aboutus.component';
import { AdoptComponent } from './Composant/adopt/adopt.component';
import { ErreurComponent } from './Composant/erreur/erreur.component';
import { ProduitsComponent } from './Composant/produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Composant/accueil/accueil.component';
import { ContactComponent } from './Composant/contact/contact.component';
import { ShopComponent } from './Composant/shop/shop.component';
import { AlimentationComponent } from './Composant/alimentation/alimentation.component';

const routes: Routes = [
  {path:'accueil',title:'Accueil', component:AccueilComponent},
  {path:'shop',title:'shop', component:ShopComponent},
  // {path:'produits/:id',title:'Produit choisi', component:SelectedProduitComponent},
  {path:'contact',title:'Contact', component:ContactComponent},
  {path:'adopt',title:'Adopt', component:AdoptComponent},
  {path:'aboutus',title:'A propos de nous', component:AboutusComponent},
  {path:'produits',title:'Accessoires', component:ProduitsComponent},
  {path:'alimentation',title:'alimentation', component:AlimentationComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', title:'Erreur',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
