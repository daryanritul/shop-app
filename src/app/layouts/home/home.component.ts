import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { categoryList } from 'src/assets/category';


export interface product{
    product:Object,
    status:boolean,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnChanges{
    category:string = 'all'
    type:string = 'all'
    sort:string = 'Popularity'
    itemCarrier:product = {
        product : {},
        status : false
    }
    @Input() search:string = ''
    @Output("onSubmitSearch") onSubmitSearch: EventEmitter<any> = new EventEmitter();
    categoryList = categoryList;
    storeItems:Array<any> = [];

  constructor(private storeServices:StoreService) { }
  
    getStoreItems = () => {
        this.storeServices.getList(this.search,this.category,this.type).subscribe((list) => {
           
            this.storeItems = list;
        }) 
        this.onChangeSort('Popularity');
    }

    onChangeSort = (order:string) => {
        this.sort = order;
            switch(this.sort){
                case 'Latest' : this.storeItems.reverse();
                break;
                case 'Popularity' : this.storeItems.sort( function(a,b) {
                    return b.rating - a.rating
                })
                break;
                case 'Better Discount' : this.storeItems.sort( function(a,b) {
                    return b.discount - a.discount
                })
                break;
                case 'Price: Low to High' : this.storeItems.sort( function(a,b) {
                    return a.price - b.price
                })
                break;
                case 'Price: High to Low' : this.storeItems.sort( function(a,b) {
                    return b.price - a.price
                })
                break;
            }
        console.log(this.storeItems);
    }

    resetFilters = (name:string) => {
        if(name ==='type'){
            this.type = 'all'
        }else if(name === 'category'){
            this.category = 'all'
        }else if(name ==='search'){
            this.onSubmitSearch.emit('');
        }
        else{
            this.type = 'all'
            this.category = 'all'
            this.onSubmitSearch.emit('');
        }
        this.getStoreItems();
    }

    onSelectItem = (item:Object) =>{
        this.itemCarrier = {
            product : (<any>item).product,
            status : (<any>item).status
        }
        console.log(this.itemCarrier);
    }

  onSelectCategory = (value:string) => {
      if(value === 'mens'||value === 'womens'||value === 'kids')
        this.type = value;
      else
        this.category = value;
    this.getStoreItems();
}
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getStoreItems();
      
  }
}