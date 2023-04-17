import { Component, OnInit } from '@angular/core';
import { LinBackService } from '../services/lin-back.service';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { FormControl } from '@angular/forms';
import { Panier } from '../models/panier';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private link:LinBackService,private router:ActivatedRoute) { }
  value:number=1;
  Clienid:number=1;
  id:any
  prod:Produit=new Produit(1,"","",1,"","",1,1)

  getProduitList() {
    console.log(this.id)
    this.link.getOneProduit(this.id).
    subscribe((data)=>{
      this.prod=data
      console.log(this.prod)
    })

  }
  quan=new FormControl('')
  updatePanier(p:Panier,n:number,v:number){
    p.quantity=v
    this.link.updateCart(p,n).subscribe()
    return 0
   }
   //Change the quantity of the product in the cart
  add(){
      this.value++


   }
  substract(){

    this.value--

   }
   getQuanFromInput(){
    this.value


   }

   addToCart(n:number){
    let p=new Panier(n,this.Clienid,this.value)
    this.link.addToCart(p).subscribe(()=>console.log(p))

  }
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
        this.getProduitList()
  }

}
