import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-result.component.html',
  styleUrl: './single-result.component.scss'
})
export class SingleResultComponent {
  description = "";
  time = "";

  results = [];
}
