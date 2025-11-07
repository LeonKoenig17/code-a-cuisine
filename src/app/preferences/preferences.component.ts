import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [NgFor, RouterLink, CommonModule],
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent {
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

  setActive(type: 'time' | 'cuisine' | 'diet', index: number): void {
    this.activeSelection[type] = index;
  }

  adjustPortions(delta: number) {
    this.portions = Math.max(1, this.portions + delta);
  }

  adjustPersons(delta: number) {
    this.persons = Math.max(1, this.persons + delta);
  }
}