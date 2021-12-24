import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  link:string = 'shop';
  search:string = '';

  onSelectTabs = (tabs:string) => {
    this.link = tabs;
  }

onSubmitSearch = (searchValue:string) =>{
    this.search = searchValue
    console.log(this.search);
}
}
