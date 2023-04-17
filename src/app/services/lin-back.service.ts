import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class LinBackService {

  URL='http://localhost:3001/'
  constructor(private http:HttpClient) { }

  getProduit():Observable<Produit>{
    return this.http.get<Produit>(this.URL + 'produit/getProduits')
  }
  getCategories():Observable<Categorie>{
    return this.http.get<Categorie>(this.URL + 'categorie/getCategorie')
  }
  getProduitByCateg(id:number):Observable<Produit>{
    const url = `${this.URL}produit/getProduitByCateg/${id}`;
    return this.http.get<Produit>(url)
  }
  getCart(id:number):Observable<Panier>{
    const url = `${this.URL}panier/${id}`;
    return this.http.get<Panier>(url)

  }
  deleteProductFromCart(id:number):Observable<any>{
    const url = `${this.URL}panier/${id}`;
    return this.http.delete(url)
  }

  addToCart(p:Panier){

    return this.http.post(this.URL + 'panier/addAuPanier', p)
  }

  getOneProduit(id:number):Observable<Produit>{
    const url = `${this.URL}produit/${id}`;
    return this.http.get<Produit>(url)
  }
  updateCart(p:Panier,id:number){
    const url = `${this.URL}panier/${id}`;
    return this.http.put(url,p)
  }

  deleteAllProductInCartOfClient(id:number):Observable<any>{
    const url = `${this.URL}panier/deleteAllofClient/${id}`;
    return this.http.delete(url)
  }
}
