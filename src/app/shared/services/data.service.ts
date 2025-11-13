import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    const appData = localStorage.getItem("appData");
    const ingredients = localStorage.getItem("ingredients");
    const preferences = localStorage.getItem("preferences");
    if (appData) this.data = JSON.parse(appData);
    if (ingredients) this.ingredients = JSON.parse(ingredients);
    if (preferences) this.preferences = JSON.parse(preferences);
  }

  private data: any = null;
  private ingredients: any = null;
  private preferences: any = null;

  BASE_URL = "https://code-a-cuisine-522fa-default-rtdb.europe-west1.firebasedatabase.app/";

  setData(data: any) {
    this.data = data;
  }

  async loadData() {
    const response = await fetch(this.BASE_URL + ".json");
    const json = await response.json();

    this.setData(json); // update global + localStorage
    return json;
  }

  getData() {
    return this.data;
  }
  
  setIngredients(ingredients: any) {
    this.ingredients = ingredients;
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }

  getIngredients() {
    return this.ingredients;
  }

  setPreferences(preferences: any) {
    this.preferences = preferences;
    localStorage.setItem("preferences", JSON.stringify(preferences));
  }

  getPreferences() {
    return this.preferences;
  }
}
