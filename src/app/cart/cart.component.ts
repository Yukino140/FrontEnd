import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LinBackService } from '../services/lin-back.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from '../models/produit';
import { Panier } from '../models/panier';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private link:LinBackService) { }
value:number=1
prod:Produit=new Produit(1,"","",1,"","",1,1);
 sum:number=0;


  quan=new FormControl('')






 // quan=new FormControl('')

id=1
Panier:any=[]
PanierFilter:any=[]
Produit:any=[]
//get all data of products from Database
getProduitList() {
  this.link.getProduit().
  subscribe((data: {})=>{
    this.Produit = data;
  })
}
k:any

//get data of Cart from database
getPanier() {
  this.link.getCart(this.id).
  subscribe((data:{}) => {
    this.Panier = data
    console.log(this.Panier)
    for(let i=0;i<this.Panier.length;i++){
      this.prod=this.Produit.find((m: { id: any; })=>{
        return m.id==this.Panier[i].idProd
      })


      this.PanierFilter.push({produit:this.prod, id:this.Panier[i].id,tot:this.prod.prix*this.Panier[i].quantity})
      this.value=this.Panier[i].quantity
      console.log("k="+this.k)


    }
    console.log(this.PanierFilter)
    this.sommeCommande()
  })

}

/*produitTot(n:number,k:number){
this.PanierFilter.forEach((element: { id: number; tot: number; produit: { prix: number; }; }) => {
  if(element.id==n){
    element.tot=k*element.produit.prix
  }

});
}*/
//delete from Cart
  delete(id:number){
 this.link.deleteProductFromCart(id).subscribe()
 window.location.reload()
}

//modify the quantity of the product in the cart


 //Calculate the sum of all products
 sommeCommande(){

  for(let i=0;i<=this.PanierFilter.length;i++){
    this.sum+=this.PanierFilter[i].tot;

  }


 }
 //Update the quantity of a product
 updatePanier(p:Panier,n:number,v:number){
  p.quantity=v
  this.link.updateCart(p,n).subscribe()
  return 0
 }
 //Change the quantity of the product in the cart
add(p:Panier,n:number,k:number){
  console.log(k)

  this.value++



  if(this.updatePanier(p,n, this.value )==0)
    window.location.reload()
 }
substract(p:Panier,n:number,k:number){
  if(this.value!=1)
  this.value--
  if( this.updatePanier(p,n, this.value )==0)
  window.location.reload()
 }

  deleteAll(){
    this.link.deleteAllProductInCartOfClient(this.id).subscribe()
 window.location.reload()
  }

  ngOnInit(): void {

    this.getProduitList()
    this.getPanier()


  }

}
