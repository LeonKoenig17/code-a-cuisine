import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [NgFor, RouterLink, CommonModule],
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
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

  activeTimeIndex: number | null = null;
  activeCuisine: number | null = null;
  activeDiet: number | null = null;

  setActiveTime(index: number): void {
    this.activeTimeIndex = index;
  }

  setActiveCuisine(index: number): void {
    this.activeCuisine = index;
  }

  setActiveDiet(index: number): void {
    this.activeDiet = index;
  }

  decreasePortions(): void {
    if (this.portions > 1) {
      this.portions--;
    }
  }

  increasePortions(): void {
    this.portions++;
  }

  decreasePersons(): void {
    if (this.persons > 1) {
      this.persons--;
    }
  }

  increasePersons(): void {
    this.persons++;
  }
}