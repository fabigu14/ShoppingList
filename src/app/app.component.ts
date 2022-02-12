import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  @ViewChild(HeaderComponent) header;

  recipesActive;
  shoppingListActive;

  title = 'shopping-list-app';

  ngAfterViewChecked(){
    this.recipesActive = this.header.recipesActive;
    this.shoppingListActive = this.header.shoppingListActive;
  }
}
