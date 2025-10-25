import { Component } from '@angular/core';
import { SingleResultComponent } from './single-result/single-result.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SingleResultComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

}
