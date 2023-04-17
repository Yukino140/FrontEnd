import { Component, OnInit } from '@angular/core';
import { LinBackService } from '../services/lin-back.service';
import { Router } from '@angular/router';
import { async } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private link:LinBackService,private router:Router) { }
  Categorie:any=[]
  getCategorieList(){
    this.link.getCategories().
    subscribe((data: {})=>{
      this.Categorie = data;
      console.log(this.Categorie)
    })
  }

  async sendId(id: number){



    await this.router.navigate(['categorie',id])
    window.location.reload()

  }
  ngOnInit(): void {
    this.getCategorieList()
  }

}
