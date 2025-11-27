import { Component, HostListener } from '@angular/core';
import { SingleResultComponent } from './single-result/single-result.component';
import { DataService } from '../shared/services/data.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SingleResultComponent, NgIf],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private dataService: DataService) {}

  isMobile = window.innerWidth < 800;
      
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }

  ngOnInit() {
    this.dataService.loadData();
    this.dataService.getData();
  }
}
