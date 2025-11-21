import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';
import { Router } from '@angular/router';
import { ServingComponent } from './serving/serving.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/services/data.service';

interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

@Component({
  selector: 'app-generate-recipe',
  standalone: true,
  imports: [NgFor, SingleIngredientComponent, ServingComponent, FormsModule, NgIf],
  templateUrl: './generate-recipe.component.html',
  styleUrl: './generate-recipe.component.scss'
})

export class GenerateRecipeComponent {
  constructor(private router: Router, private dataService: DataService) {}

  ingredientName: string = "";
  quantity: string = "";
  unit: string = "";
  ingredients: Ingredient[] = [];
  clicked = false;

  ngOnInit() {
    this.loadList();
  }

  cleanInput(event: KeyboardEvent) {
    const letter = new RegExp("^\\p{L}$", "u");
    const space  = event.key === " ";

    if (!letter.test(event.key) && !space) {
      event.preventDefault();
    }
  }

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
      this.saveList();
      this.loadList();
    }
  }

  removeFromList(index: number) {
    this.ingredients.splice(index, 1);
    this.saveList();
    this.loadList();
  }

  changeIngredients(index: number, updated: {quantity: string, unit: string}) {
    this.ingredients[index].quantity = updated.quantity;
    this.ingredients[index].unit = updated.unit;
    this.saveList();
    this.loadList();
  }

  saveList() {
    this.dataService.setIngredients(this.ingredients);
  }
  
  loadList() {
    this.ingredients = this.dataService.getIngredients();
  }

  nextStep() {
    this.clicked = true;
    if (this.ingredients && this.ingredients.length > 0) {
      this.saveList();
      this.router.navigate(["/preferences"]);
    }
  }
}
