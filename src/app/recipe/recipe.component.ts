import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent, IngredientsComponent, InstructionsComponent, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {

}
