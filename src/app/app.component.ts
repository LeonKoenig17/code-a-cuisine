import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/header/header.component';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-a-cuisine';
  logoPath = "/assets/images/logo-white.png";

  constructor(
    private router: Router, 
    private renderer: Renderer2,
    private dataService: DataService) {
    this.router.events
      .pipe(filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const body = document.body;

        // Remove any previous background classes
        this.renderer.removeClass(body, 'bg-green');
        this.renderer.removeClass(body, 'bg-white');

        // ✅ Hero page route (make green)
        if (event.url === '/' || event.url === '/hero' || event.url === '/results') { // adjust path to your hero page
          this.renderer.addClass(body, 'bg-green');
          this.logoPath = "/assets/images/logo-white.png";
        } else {
          // All other pages → white
          this.renderer.addClass(body, 'bg-white');
          this.logoPath = "/assets/images/logo-green.png";
        }
      });
  }

  BASE_URL = "https://code-a-cuisine-522fa-default-rtdb.europe-west1.firebasedatabase.app/";
  ingredients : any[] = [];
  preferences : any[] = [];
  inputData: any = {};
  data = {};

  async getData() {
    await fetch(this.BASE_URL + ".json", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(response => {
      this.dataService.setData(response);
    });
  }

  buildObject() {
    const storedIngredients = localStorage.getItem('ingredients');
    this.ingredients = storedIngredients ? JSON.parse(storedIngredients) : [];
    const storedPreferences = localStorage.getItem('preferences');
    this.preferences = storedPreferences ? JSON.parse(storedPreferences) : [];
    this.inputData = {
      "preferences": this.preferences,
      "your-ingredients": this.ingredients
    }
  }
}