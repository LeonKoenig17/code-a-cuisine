import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent, IngredientsComponent, InstructionsComponent, RouterLink, NgIf],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  UNIT_MAP: Record<string, string> = {
    gram: "g",
    piece: "",
  }

  cuisineName: string = "";
  id: string = "";
  data: any = {};
  path: any = {};
  headerObject: any = {};
  ingredientsObject: any = {};
  instructionsObject: any = {};
  
  async ngOnInit() {
    this.cuisineName = this.route.snapshot.paramMap.get("cuisine")!;
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.data = await this.dataService.loadData();
    console.log(this.data);
    this.path = this.data[this.cuisineName][this.id];
    this.buildHeaderDataObject();
    this.buildIngredientsDataObject();
    this.buildInstructionsDataObject();
  }

  buildHeaderDataObject() {
    const cookingTime = this.path.preferences.cookingTime;
    const persons = this.path.preferences.persons;
    const title = this.path.title;
    const diet = this.path.preferences.diet;
    const nutrition = this.path.nutrition;
    const likes = this.path.likes;
    this.headerObject = {cookingTime, persons, title, diet, nutrition, likes};
  }

  buildIngredientsDataObject() {
    const yourIngredients = this.convertUnits(this.path["your-ingredients"]);
    const extraIngredients = this.convertUnits(this.path["extra-ingredients"]);
    this.ingredientsObject = {yourIngredients, extraIngredients};
  }

  buildInstructionsDataObject() {

    console.log("instructions", this.path.steps);
  }

  convertUnits(ingredients: any[]) {
    return ingredients.map(item => ({
      ...item,
      unit: this.UNIT_MAP[item.unit] ?? item.unit     // fallback to original if not found
    }));
  }
}
