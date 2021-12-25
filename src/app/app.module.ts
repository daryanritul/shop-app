import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { CartComponent } from './layouts/cart/cart.component';
import { MyOrdersComponent } from './layouts/my-orders/my-orders.component';
import { ItemComponent } from './layouts/item/item.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    MyOrdersComponent,
    ItemComponent,
    HeaderComponent,
    ItemCardComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
