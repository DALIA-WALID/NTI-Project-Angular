import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WomenComponent } from './pages/women/women.component';
import { MenComponent } from './pages/men/men.component';
import { CartComponent } from './pages/cart/cart.component';
import { ChildrenComponent } from './pages/children/children.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CardComponent } from './pages/card/card.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { observeable } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WomenComponent,
    MenComponent,
    CartComponent,
    ChildrenComponent,
    SigninComponent,
    CardComponent,
    ProductsComponent,
    AddproductComponent,
    RegisterComponent,
    HttpClientModule,
    //ErrorComponent,
    RegisterComponent,
    //EditProfileComponent,

    HTTP_INTERCEPTORS,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  provide : HTTP_INTERCEPTORS ,
  useClass : AuthInterceptor ,
  multi : true
})
export class AppModule { }
