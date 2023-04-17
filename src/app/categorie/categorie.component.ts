import { Component, OnInit } from '@angular/core';
import { LinBackService } from '../services/lin-back.service';
import { ActivatedRoute } from '@angular/router';
import { Panier } from '../models/panier';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private link:LinBackService ,private router:ActivatedRoute,private route:Router) { }

  Produit:any=[]
  id:any

  p:Panier=new Panier(1,1,1)
  Clienid=1
  ngOnInit(): void {

     this.id = this.router.snapshot.params['id'];


    this.getProduitList()

  }
  toDetails(n:number){
    this.route.navigate(['detail',n])
  }
  getProduitList() {
    if(this.id!=this.router.snapshot.params['id']){
      window.location.reload()
      this.id=this.router.snapshot.params['id']
    }
    this.link.getProduitByCateg(this.id).
    subscribe((data: {})=>{
      this.Produit = data;
      console.log(this.Produit)
    })

  }

  addToCart(n:number){
    this.p=new Panier(n,this.Clienid,1)
    this.link.addToCart(this.p).subscribe(()=>console.log(this.p))

  }

    toPanier(){
      this.route.navigate(['panier'])
    }
}
