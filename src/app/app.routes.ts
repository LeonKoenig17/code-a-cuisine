import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { GenerateRecipeComponent } from './generate-recipe/generate-recipe.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ResultsComponent } from './results/results.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CollectionComponent } from './collection/collection.component';

export const routes: Routes = [
    { path: '', component: HeroPageComponent},
    { path: 'generate-recipe', component: GenerateRecipeComponent},
    { path: 'preferences', component: PreferencesComponent},
    { path: 'results', component: ResultsComponent},
    { path: 'recipe/:cuisine/:id', component: RecipeComponent},
    { path: 'cookbook', component: CookbookComponent},
    { path: 'collection/:name', component: CollectionComponent},
];
