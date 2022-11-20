import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimentation } from '../alimentationclass/alimentation';
import { Produit } from '../Produitclass/produit';
const URL = 'http://localhost:3500/produits';
const URL2 = 'http://localhost:3500/alimentations';
@Injectable({
  providedIn: 'root'
})
export class ProduitservService {

  constructor(private http:HttpClient) { }
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }
    getAlimentation():Observable<Alimentation[]>{
      return this.http.get<Alimentation[]>(URL2);
      }
      
}
