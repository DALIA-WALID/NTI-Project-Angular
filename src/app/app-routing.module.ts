import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from "./pages/women/women.component";
import { HomeComponent } from "./pages/home/home.component";
import { ChildrenComponent } from "./pages/children/children.component";
import { MenComponent } from "./pages/men/men.component";
import { SigninComponent } from './pages/signin/signin.component';
import { CardComponent } from './pages/card/card.component';
import { CartComponent } from "./pages/cart/cart.component";

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "women", component: WomenComponent },
 { path: "men", component: MenComponent },
  { path: "children", component: ChildrenComponent },
  { path: "cart", component: CartComponent },
  { path: "signin", component: SigninComponent },
  { path: "card", component: CardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
