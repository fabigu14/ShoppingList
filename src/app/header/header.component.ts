import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  recipesActive = true;
  shoppingListActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateShoppingList() {

    this.recipesActive = false;
    this.shoppingListActive = true;
  }

  activateRecipes() {
    this.recipesActive = true;
    this.shoppingListActive = false;
  }

}
