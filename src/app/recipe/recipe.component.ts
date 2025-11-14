import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent, IngredientsComponent, InstructionsComponent, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  cuisineName: string = "";
  id: string = "";
  data: any = {};
  headerObject = {};
  path: any = {};
  
  async ngOnInit() {
    this.cuisineName = this.route.snapshot.paramMap.get("cuisine")!;
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.data = await this.dataService.loadData();
    console.log(this.data);
    this.path = this.data[this.cuisineName][this.id];
    this.buildHeaderDataObject();
  }

  buildHeaderDataObject() {
    const cookingTime = this.path.preferences.cookingTime;
    const persons = this.path.preferences.persons;
    const title = this.path.title;
    const diet = this.path.preferences.diet;
    const nutrition = this.path.nutrition;
    const likes = this.path.likes;
    this.headerObject = {cookingTime, persons, title, diet, nutrition, likes};
    console.log(this.headerObject);
  }

}
