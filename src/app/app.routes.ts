import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { GenerateRecipeComponent } from './generate-recipe/generate-recipe.component';
import { CookbookComponent } from './cookbook/cookbook.component';

export const routes: Routes = [
    { path: '', component: HeroPageComponent},
    { path: 'generate-recipe', component: GenerateRecipeComponent},
    { path: 'cookbook', component: CookbookComponent},
];
