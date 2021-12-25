import { Component, OnInit } from '@angular/core';
import { categoryList } from 'src/assets/category';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    category:string = 'latest'
    categoryList = categoryList;
    onSelectCategory = (category:string) => {
        this.category = category
    }
  constructor() { }

  ngOnInit(): void {
  }

}
