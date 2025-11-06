import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';
import { RouterLink } from '@angular/router';
import { ServingComponent } from './serving/serving.component';
import { FormsModule } from '@angular/forms';

interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

@Component({
  selector: 'app-generate-recipe',
  standalone: true,
  imports: [ NgFor, SingleIngredientComponent, RouterLink, ServingComponent, FormsModule],
  templateUrl: './generate-recipe.component.html',
  styleUrl: './generate-recipe.component.scss'
})

export class GenerateRecipeComponent {
  ingredientName: string = "";
  quantity: string = "";
  unit: string = "";
  ingredients: Ingredient[] = [];

  receiveServing(event: {quantity: string, unit: string}) {
    this.quantity = event.quantity;
    this.unit = event.unit;
  }

  addToList() {
    if (this.ingredientName?.trim() && this.quantity?.trim()) {
      this.ingredients.push({
        name: this.ingredientName.trim(),
        quantity: this.quantity.trim(),
        unit: this.unit || 'g'
      })
    }
  }

  saveToObject() {
    
  }
}
