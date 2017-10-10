import {Component, Input, OnInit} from '@angular/core';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeReceive;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addToSL() {
    for ( let i = 0; i < this.recipeReceive.ingredients.length; i++ ) {
      this.slService.addIngredient(this.recipeReceive.ingredients[i].name, this.recipeReceive.ingredients[i].amount);
    }
  }

}
