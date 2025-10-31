import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuisine',
  standalone: true,
  imports: [],
  templateUrl: './cuisine.component.html',
  styleUrl: './cuisine.component.scss'
})
export class CuisineComponent {
  @Input() name: string = "";
  @Input() icon: string = "";
  @Input() img: string = "";
}
