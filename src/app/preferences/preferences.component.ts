import { CommonModule, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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

  isMobile = window.innerWidth < 800;
    
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }

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
    t: null as number | null,
    c: null as number | null,
    d: null as number | null
  };

  clicked = false;

  setActive(type: 't' | 'c' | 'd', index: number): void {
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
    const { t, c, d } = this.activeSelection;
    if (t !== null && c !== null && d !== null) {
      const time = this.cookingTimes[t].label;
      const cuisine = this.cuisines[c];
      const diet = this.diets[d];
      this.preferences = {
        portions: this.portions,
        persons: this.persons,
        cookingTime: time,
        cuisine: cuisine,
        diet: diet,
        ingredients: this.dataService.getIngredients()
      }
      this.dataService.setPreferences({time, cuisine, diet});
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