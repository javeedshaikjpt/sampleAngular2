import { Ingredient } from '../../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
export class ShoppingListService {
  ingredients: Ingredient[] = [ new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 6)];
  ingredientEmit = new EventEmitter<Ingredient>();
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient( name: string, amount: number) {
    this.ingredients.push( new Ingredient(name, amount) );
  }
}
