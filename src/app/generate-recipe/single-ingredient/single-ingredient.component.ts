import { Component, EventEmitter, Input, Output, output } from '@angular/core';
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
  }
}
