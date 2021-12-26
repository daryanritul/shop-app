import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() itemCarrier:Object ={}
    @Output('onSelectItem') onSelectItem : EventEmitter<any> = new EventEmitter();
    @Output('addToMyCart') addToMyCart : EventEmitter<any> = new EventEmitter();
    get pro(){
        return (<any>this.itemCarrier).product
    }
  constructor() { }

  ngOnInit(): void {
  }

}
