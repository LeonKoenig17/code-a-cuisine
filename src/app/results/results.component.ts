import { Component, HostListener } from '@angular/core';
import { SingleResultComponent } from './single-result/single-result.component';
import { DataService } from '../shared/services/data.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventService } from '../shared/services/event-service.service';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SingleResultComponent, NgIf, RouterLink],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private dataService: DataService, private eventService: EventService) {}

  isMobile = window.innerWidth < 800;
  webhookURL = "http://localhost:5678/webhook/recipe-preferences";
      
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }

  async ngOnInit() {

    this.eventService.trigger$.subscribe(() => {
      this.sendToAgent(this.dataService.getPreferences());
    });
    this.dataService.loadData();
    this.dataService.getData();
  }

  async sendToAgent(savedPreferences: any) {
    console.log("starting workflow");
    const res = await fetch(this.webhookURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(savedPreferences)
    });
  
    let response = await res.json();
    if (response.error !== ""){
      console.log('Error received: ', response.error);
      this.sendToAgent(savedPreferences);
    } else {
      console.log('Execution successful');
    }
  }
}
