import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
    @Input() link:string = ''
    @Input() search:string = ''
    @Output("onSelectTabs") onSelectTabs: EventEmitter<any> = new EventEmitter();
    @Output("onSubmitSearch") onSubmitSearch: EventEmitter<any> = new EventEmitter();
    len:number = 0;
  constructor(private storeService:StoreService) { }



  get length(){
     this.storeService.getMyCart().subscribe(cart => {
         this.len = cart.length
        })
        return this.len;
  }


  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
