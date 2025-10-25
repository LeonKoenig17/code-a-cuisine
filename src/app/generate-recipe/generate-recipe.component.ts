import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';
import { RouterLink } from '@angular/router';
import { ServingComponent } from './serving/serving.component';

@Component({
  selector: 'app-generate-recipe',
  standalone: true,
  imports: [ NgFor, SingleIngredientComponent, RouterLink, ServingComponent],
  templateUrl: './generate-recipe.component.html',
  styleUrl: './generate-recipe.component.scss'
})
export class GenerateRecipeComponent {
  ingredients = [];
}
