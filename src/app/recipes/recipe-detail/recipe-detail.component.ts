import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() detailItem: Recipe;
  @Input() detailItem: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // this.recipeService.recipeDetail = this.detailItem;
  }

}
