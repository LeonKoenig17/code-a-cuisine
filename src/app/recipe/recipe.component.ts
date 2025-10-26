import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent, IngredientsComponent, InstructionsComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {

}
