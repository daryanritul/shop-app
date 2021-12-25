import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
@Input() name:string = '';
@Input() image:string = '';
@Input() price:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
