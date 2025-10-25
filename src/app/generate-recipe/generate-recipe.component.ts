import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';
import { RouterLink } from '@angular/router';
import { ServingComponent } from './serving/serving.component';

@Component({
  selector: 'app-generate-recipe',
  standalone: true,
  imports: [ NgIf, NgFor, SingleIngredientComponent, RouterLink, ServingComponent],
  templateUrl: './generate-recipe.component.html',
  styleUrl: './generate-recipe.component.scss'
})
export class GenerateRecipeComponent {
  isOpen = false;
  selectedUnit = 'gram';
  units = ['piece', 'ml', 'gram'];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectUnit(unit: string) {
    this.selectedUnit = unit;
    this.isOpen = false; // close dropdown after selection
  }

  ingredients = [
    { name: 'Tomato', quantity: 2, unit: 'piece' },
    { name: 'Tomato', quantity: 2, unit: 'piece' },
  ];
}
