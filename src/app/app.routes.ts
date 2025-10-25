import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { GenerateRecipeComponent } from './generate-recipe/generate-recipe.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { PreferencesComponent } from './preferences/preferences.component';

export const routes: Routes = [
    { path: '', component: HeroPageComponent},
    { path: 'generate-recipe', component: GenerateRecipeComponent},
    { path: 'preferences', component: PreferencesComponent},
    { path: 'cookbook', component: CookbookComponent},
];
