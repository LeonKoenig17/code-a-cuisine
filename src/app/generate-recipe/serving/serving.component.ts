import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-serving',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './serving.component.html',
  styleUrls: ['./serving.component.scss']
})
export class ServingComponent {
  isOpen = false;
  src = "/assets/images/generate-recipe/drop-arrow-down.png";
  units = ['piece', 'ml', 'gram'];
  selectedUnit: string = 'gram';
  inputQuantity: string = "100";

  @Output() servingChange = new EventEmitter<{quantity: string, unit: string}>();

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.toggleArrow();
  }

  ngOnInit() {
    this.servingChange.emit({quantity: this.inputQuantity, unit: this.selectedUnit});
  }

  onInput(event: any) {
    this.inputQuantity = event.target.value;
    this.servingChange.emit({quantity: this.inputQuantity, unit: this.selectedUnit});
  }

  selectUnit(unit: string) {
    this.selectedUnit = unit;
    this.isOpen = false; // close dropdown after selection
    this.toggleArrow();
    this.servingChange.emit({quantity: this.inputQuantity, unit: this.selectedUnit});
  }

  toggleArrow() {
    if (this.isOpen) {
      this.src = "/assets/images/generate-recipe/drop-arrow-up.png";
    } else {
      this.src = "/assets/images/generate-recipe/drop-arrow-down.png";
    }
  }
}
