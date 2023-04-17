import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategorieComponent } from './categorie/categorie.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'accueil', component:HomeComponent},
{path:'categorie/:id', component:CategorieComponent},
{path:'detail/:id', component:DetailComponent},
{path:'panier', component:CartComponent},

{path:'', redirectTo:'accueil', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
