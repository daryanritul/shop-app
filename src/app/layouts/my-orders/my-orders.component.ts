import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/model/orders';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders : Orders[] = [];
  items:Array<any> = [];
  constructor(private storeServices : StoreService) { }

  onSelectOrder = (value:Array<any>) => {
      this.items = value;
      console.log(this.items);
      
  }
  ngOnInit(): void {
    this.storeServices.getOrders().subscribe((snap) => {
    this.orders = snap
    }) 
  }
}
