import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeDetailItem = new EventEmitter<Recipe>();

  // recipes: Recipe[] = [
  //   new Recipe('Test Recipe', 'This is a test recipe', 'https://www.cookipedia.co.uk/wiki/images/b/b3/Fish_stew_from_Tirana_recipe.jpg'),
  //   new Recipe('Second Test Recipe', 'This is a second test recipe', 'https://www.cookipedia.co.uk/wiki/images/b/b3/Fish_stew_from_Tirana_recipe.jpg'),
  // ]

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


}
