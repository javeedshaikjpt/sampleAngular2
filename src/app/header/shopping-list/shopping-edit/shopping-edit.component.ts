import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
    // ingredient: Ingredient;
  addIngredient() {
    this.slService.ingredientEmit.emit( {name: this.name.nativeElement.value, amount: this.amount.nativeElement.value }  );
  }
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

}
