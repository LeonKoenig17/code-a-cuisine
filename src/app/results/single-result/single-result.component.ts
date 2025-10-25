import { Component } from '@angular/core';

@Component({
  selector: 'app-single-result',
  standalone: true,
  imports: [],
  templateUrl: './single-result.component.html',
  styleUrl: './single-result.component.scss'
})
export class SingleResultComponent {
  description = "";
  time = "";

  results = [];
}
