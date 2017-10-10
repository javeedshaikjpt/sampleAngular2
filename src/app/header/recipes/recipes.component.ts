import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {
  recipeReceived: Recipe;

  constructor( private rService: RecipeService) { }

  ngOnInit() {
    const that = this;
    this.rService.recipeSelected.subscribe( (rec: Recipe) => { that.recipeReceived = rec } )
  }

}
