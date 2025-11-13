import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listed-recipe',
  standalone: true,
  imports: [],
  templateUrl: './listed-recipe.component.html',
  styleUrl: './listed-recipe.component.scss'
})
export class ListedRecipeComponent {
  @Input() index!: number;
  @Input() recipe!: any;

  ngOnInit() {
    console.log(this.recipe);
  }
}
