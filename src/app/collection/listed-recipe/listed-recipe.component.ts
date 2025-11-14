import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-listed-recipe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listed-recipe.component.html',
  styleUrl: './listed-recipe.component.scss'
})
export class ListedRecipeComponent {

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
