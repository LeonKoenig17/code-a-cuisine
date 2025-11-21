import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ServingComponent } from '../serving/serving.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-single-ingredient',
  standalone: true,
  imports: [NgIf, ServingComponent],
  templateUrl: './single-ingredient.component.html',
  styleUrl: './single-ingredient.component.scss',
})
export class SingleIngredientComponent {

  @Input() name: string = '';
  @Input() quantity: string = '';
  @Input() unit: string = '';

  @Output() delete = new EventEmitter<void>();
  @Output() ingredientsChange = new EventEmitter<{quantity: string, unit: string}>();

  ingredients = [];

  deleteSelf() {
    this.delete.emit();
  }

  editMode_enabled: boolean = false;

  toggleEditMode() {
    this.editMode_enabled = !this.editMode_enabled;
  }

  receiveServing(event: {quantity: string, unit: string}) {
    this.quantity = event.quantity;
    this.unit = event.unit;
    this.ingredientsChange.emit({quantity: this.quantity, unit: this.unit});
  }

  isMobile = window.innerWidth < 800;
  
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }
}
