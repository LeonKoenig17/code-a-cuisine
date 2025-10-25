import { Component } from '@angular/core';
import { ServingComponent } from '../serving/serving.component';
import { NgIf, NgClass } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-single-ingredient',
  standalone: true,
  imports: [NgIf, ServingComponent, NgClass],
  templateUrl: './single-ingredient.component.html',
  styleUrl: './single-ingredient.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [  // when element appears
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [  // when element disappears
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SingleIngredientComponent {
  editMode_enabled: boolean = false;

  toggleEditMode() {
    this.editMode_enabled = !this.editMode_enabled;
  }
}
