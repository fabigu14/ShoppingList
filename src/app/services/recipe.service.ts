import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'https://www.cookipedia.co.uk/wiki/images/b/b3/Fish_stew_from_Tirana_recipe.jpg'),
    new Recipe('Second Test Recipe', 'This is a second test recipe', 'https://www.cookipedia.co.uk/wiki/images/b/b3/Fish_stew_from_Tirana_recipe.jpg'),
  ]

 

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

  // showRecipeDatail(recipeDetail) {
  //   this.recipeDetail = recipeDetail;

  // }
}
