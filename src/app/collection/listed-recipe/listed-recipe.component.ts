import { NgIf } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-listed-recipe',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './listed-recipe.component.html',
  styleUrl: './listed-recipe.component.scss'
})
export class ListedRecipeComponent {

  isMobile = window.innerWidth < 800;
      
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }

  @Input() index!: number;
  @Input() recipe!: any;
  @Input() cuisine: any;
  minutes: string = "";

  ngOnInit() {
    switch (this.recipe.preferences.cookingTime) {
      case "Quick":
        this.minutes = "20min";
      break;
      case "Medium":
        this.minutes = "25-40min";
      break;
      case "Complex":
        this.minutes = "over 45min";
      break;
    
      default:
        break;
    }
  }
}
