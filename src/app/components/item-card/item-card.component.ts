import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import {Clothes} from './../../model/clothes'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
    @Input()
    product!:Clothes;
    @Output('onSelectItem') onSelectItem :EventEmitter<any> = new EventEmitter();
  constructor() { 
  }

  ngOnInit(): void {
  }

}
