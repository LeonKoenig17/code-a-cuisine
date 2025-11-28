import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-result.component.html',
  styleUrl: './single-result.component.scss'
})
export class SingleResultComponent {
  @Input() recipe: any;
  @Input() index!: number;

  title: string = "";
  cookingTime: string = "";
  cuisine: string = "";

  ngOnInit() {
    this.title = this.recipe.title;
    this.cookingTime = this.recipe.preferences.cookingTime;
    this.cuisine = this.recipe.preferences.cuisine;
    switch (this.cookingTime) {
      case "Quick":
        this.cookingTime = "up to 20min"
        break;
      case "Medium":
        this.cookingTime = "25 - 40min"
        break;
      case "Complex":
        this.cookingTime = "over 40min"
        break;
    
      default:
        break;
    }
  }
}
