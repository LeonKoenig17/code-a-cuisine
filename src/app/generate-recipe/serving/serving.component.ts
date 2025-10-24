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
  selectedUnit = 'gram';
  units = ['piece', 'ml', 'gram'];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectUnit(unit: string) {
    this.selectedUnit = unit;
    this.isOpen = false; // close dropdown after selection
  }
}
