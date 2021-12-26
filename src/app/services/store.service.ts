import { LowerCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import warehouse from 'src/assets/warehouse';
import storeItems from 'src/assets/warehouse';

import {Clothes} from './../model/clothes'
@Injectable({
  providedIn: 'root'
})
export class StoreService {
    storeItems : Clothes[] = [];
  constructor() {
      this.storeItems = storeItems;
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
           list = list.slice(0,20);
       }else{
           list = list.filter((items => items.category === category))
       }
       return of(list)
   }
}