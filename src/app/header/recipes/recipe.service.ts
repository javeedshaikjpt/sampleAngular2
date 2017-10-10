import { Recipe } from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
export class RecipeService {
  recipes: Recipe[] = [ new Recipe('A test recipe', 'This is simply a test', 'http://www.ndtv.com/cooks/images/Honey.chilli.potatoes.jpg',
    [new Ingredient('French Fries', 1), new Ingredient('Meat', 1)]),
  new Recipe('Another test recipe', 'This is simply a test', 'http://www.ndtv.com/cooks/images/Honey.chilli.potatoes.jpg',
    [new Ingredient('Bun', 2), new Ingredient('Meat', 1)])];
  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
}
