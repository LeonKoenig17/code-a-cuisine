import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [NgFor, RouterLink, CommonModule],
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent {
  constructor(private router: Router, private dataService: DataService) {}

  webhookURL = "http://localhost:5678/webhook/recipe-preferences";
  
  preferences = {};
  portions = 2;
  persons = 2;
  cookingTimes = [
    { label: 'Quick', description: 'up to 20min' },
    { label: 'Medium', description: '25–40min' },
    { label: 'Complex', description: 'over 40min' }
  ];

  cuisines = ['German', 'Italian', 'Indian', 'Japanese', 'Gourmet', 'Fusion'];
  diets = ['Vegetarian', 'Vegan', 'Keto', 'No preferences'];

  activeSelection = {
    time: null as number | null,
    cuisine: null as number | null,
    diet: null as number | null
  };

  clicked = false;
  allPreferencesSelected = (this.activeSelection.time === null || this.activeSelection.cuisine === null || this.activeSelection.diet === null);

  setActive(type: 'time' | 'cuisine' | 'diet', index: number): void {
    this.activeSelection[type] = index;
  }

  adjustPortions(delta: number) {
    this.portions = Math.max(1, this.portions + delta);
  }

  adjustPersons(delta: number) {
    this.persons = Math.max(1, this.persons + delta);
  }

  generateRecipe() {
    this.clicked = true;
    const { time, cuisine, diet } = this.activeSelection;
    if (time !== null && cuisine !== null && diet !== null) {
      this.preferences = {
        portions: this.portions,
        persons: this.persons,
        cookingTime: this.cookingTimes[time].label,
        cuisine: this.cuisines[cuisine],
        diet: this.diets[diet],
        ingredients: this.dataService.getIngredients()
      }
      this.sendToAgent();
      this.router.navigate(['/results']);
    }
  }

  async sendToAgent() {
    await fetch(this.webhookURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.preferences)
    });
  }
}