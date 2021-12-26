import { LowerCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import warehouse from 'src/assets/warehouse';
import storeItems from 'src/assets/warehouse';
import { Cart } from '../model/cart';
import { Orders } from '../model/orders';

import {Clothes} from './../model/clothes'
@Injectable({
  providedIn: 'root'
})
export class StoreService {
    storeItems : Clothes[];
    cart:Cart[];
    orders:Orders[];
  constructor() {
        this.storeItems = storeItems;
        this.cart = []
        this.orders = []
   }

   getOrders = () =>{
       return of(this.orders)
   }

   addToOrders = (item:Array<any>, total:number) => {
        this.orders.push({
                id : new Date().toLocaleTimeString(),
                totalPrice : total,
                date : new Date().toString(),
                items : item
        })
   }

   addToCart = (product:Cart) => {
       let index = this.cart.findIndex((item) => item.productId === product.productId)
       if(index === -1)
            this.cart.push(product)
       else
            this.cart[index].quantity = this.cart[index].quantity+1; 
   }

   addToProduct = (pid:string) => {
    let index = this.cart.findIndex((item) => item.productId === pid)
    if(index !==-1)
         this.cart[index].quantity = this.cart[index].quantity+1; 
   }

   removeFromCart = (pid:string) => {
    let index = this.cart.findIndex((item) => item.productId === pid)
    if(this.cart[index].quantity === 1)
         this.cart =  this.cart.filter(item => item.productId !== pid)
    else
         this.cart[index].quantity = this.cart[index].quantity-1; 
}

removeProductFromCart = (pid:string) => {
     this.cart = this.cart.filter(item => item.productId !== pid)
     
}

clearCart = () => {
    this.cart = [];
}


   getMyCart = () =>{
       return of(this.cart)
   }
   getList = (search:string,category:string,type:string) =>{
        var list = storeItems;
       search = search.toLowerCase()
    console.log(search);
    
    if(search !== ''){
        list = list.filter((item => 
            item.title.toLowerCase().includes(search)||
            item.brand.toLowerCase().includes(search)||
            item.type.toLowerCase().includes(search)||
            item.category.toLowerCase().includes(search)
            ))
    }
       if(type !== 'all'){
        list = list.filter((item) => item.type === type)
       }
       if(category === 'all'){
           list = list;
       }else{
           list = list.filter((items => items.category === category))
       }
       return of(list)
   }
}