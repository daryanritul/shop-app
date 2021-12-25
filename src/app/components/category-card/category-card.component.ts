import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { categoryList } from 'src/assets/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
    categoryList = categoryList;
    @Output("onSelectCategory") onSelectCategory : EventEmitter<any>  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
      
}

}
