import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
cartList:Cart[] = [];
totalPrice:number = 0;
disc:number = 0;

  constructor(private storeServices:StoreService) { 
  }


  get MRP(){
      var mrp = 0;
      var disc = 0;
      this.cartList.map((item) => {
        mrp = mrp + item.price * item.quantity;
        disc = disc + (item.price * item.discount/100) * item.quantity
      })
      return {
          mrp : mrp,
          discount : disc
      }
  }
  addItem = (pid:string) => {
      this.storeServices.addToProduct(pid)
    this.getMyCart()

  }
  removeQuantity = (uid:string) => {
    this.storeServices.removeFromCart(uid)
    this.getMyCart()

  }
  removeProduct = (uid:string) => {
    this.storeServices.removeProductFromCart(uid);
    this.getMyCart()
  }
  
  getMyCart = () => {
this.storeServices.getMyCart().subscribe((cart) => {
          this.cartList = cart
      })    
  }

  ngOnInit(): void {
        this.getMyCart()
  }
}
