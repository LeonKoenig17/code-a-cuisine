import { Component } from '@angular/core';
import { SingleResultComponent } from './single-result/single-result.component';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SingleResultComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.loadData();
    this.dataService.getData();
  }
}
