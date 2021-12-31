import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {
    console.log(this.recipe);
  }

  ngOnInit(){}

  onSelected() {
    // console.log(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
