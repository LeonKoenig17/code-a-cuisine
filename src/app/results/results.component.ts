import { Component, HostListener } from '@angular/core';
import { SingleResultComponent } from './single-result/single-result.component';
import { DataService } from '../shared/services/data.service';
import { NgIf, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventService } from '../shared/services/event-service.service';


@Component({
  selector: 'app-results',
  standalone: true,
  imports: [SingleResultComponent, NgIf, RouterLink, NgForOf],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private dataService: DataService, private eventService: EventService) {}

  isMobile = window.innerWidth < 800;
  webhookURL = "http://localhost:5678/webhook/recipe-preferences";
  success = true;
  preferences: any = {};
  cuisine: string = "";
  cookingTime: string = "";
  items: any = [];
      
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }

  async ngOnInit() {
    this.eventService.trigger$.subscribe(() => {
      this.sendToAgent(this.dataService.getPreferences());
    });
    this.preferences = this.dataService.getPreferences();
    this.cuisine = this.preferences.cuisine;
    this.cookingTime = this.preferences.cookingTime;
    await this.getGeneratedRecipes();
  }
  
  async sendToAgent(savedPreferences: any) {
    this.success = false;
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
      await this.sendToAgent(savedPreferences);
    } else {
      console.log('Execution successful');
      await this.getGeneratedRecipes();
      this.success = true;
    }
  }

  private async getGeneratedRecipes() {
    await this.dataService.loadData();
    let allRecipes = this.dataService.getData();
    let entries = Object.entries(allRecipes[this.cuisine]);
    entries.sort((a: any, b: any) =>
      new Date(b[1].timestamp).getTime() - new Date(a[1].timestamp).getTime()
    );
    const newestRecipes = entries.slice(0, 3);
    this.items = newestRecipes.map(([id, recipe]) => ({
      id,
      ...(recipe as object)
    }));
  }
}
