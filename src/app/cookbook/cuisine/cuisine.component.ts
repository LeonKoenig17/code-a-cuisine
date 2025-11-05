import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cuisine',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cuisine.component.html',
  styleUrl: './cuisine.component.scss'
})
export class CuisineComponent {
  @Input() name: string = "";
  @Input() icon: string = "";
  @Input() img: string = "";
}
