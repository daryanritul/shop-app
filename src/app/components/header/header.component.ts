import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() link:string = ''
    @Input() search:string = ''
    @Output("onSelectTabs") onSelectTabs: EventEmitter<any> = new EventEmitter();
    @Output("onSubmitSearch") onSubmitSearch: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
