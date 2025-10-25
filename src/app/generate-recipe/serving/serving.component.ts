import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-serving',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './serving.component.html',
  styleUrl: './serving.component.scss'
})
export class ServingComponent {
  isOpen = false;
  src = "/assets/images/generate-recipe/drop-arrow-down.png";
  selectedUnit = 'gram';
  units = ['piece', 'ml', 'gram'];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.toggleArrow();
  }

  selectUnit(unit: string) {
    this.selectedUnit = unit;
    this.isOpen = false; // close dropdown after selection
    this.toggleArrow();
  }

  toggleArrow() {
    if (this.isOpen) {
      this.src = "/assets/images/generate-recipe/drop-arrow-up.png";
    } else {
      this.src = "/assets/images/generate-recipe/drop-arrow-down.png";
    }
  }
}
