import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/header/header.component';

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

  constructor(private router: Router, private renderer: Renderer2) {
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

  async getData() {
    this.post(this.recipeData);
    await fetch(this.BASE_URL + ".json")
    .then(response => response.json())
    .then(response => console.log(response));
  }

  async post(data: Object) {
    await fetch(this.BASE_URL + "/italian.json", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  inputData = {
    "cookingTime": 20,
    "extra-ingredients": [
      {
        "name": "cheese",
        "quantity": 40,
        "unit": "gram"
      },
      {
        "name": "olive oil",
        "quantity": 30,
        "unit": "ml"
      }
    ],
    "likes": 66,
    "nutrition": {
      "carbs": 58,
      "energy": 630,
      "fat": 24,
      "protein": 10
    },
    "preferences": "Vegetarian",
    "steps": [
      {
        "description": "Cook your noodles in boiling, salted water, until the pasta is al dente.  Drain the pasta and reserve some of the pasta water.",
        "title": "cook the pasta"
      },
      {
        "description": "While the pasta is cooking, heat olive oil in a pan over medium heat. Add the garlic, and sauté until it starts to turn golden. Add the tomatoes, oregano, salt, and pepper, and cook for 3-4 minutes.",
        "title": "make the sauce"
      }
    ],
    "title": "Pasta with spinach and cherry tomatoes",
    "your-ingredients": [
      {
        "name": "pasta",
        "quantity": 80,
        "unit": "gram"
      },
      {
        "name": "spinach",
        "quantity": 100,
        "unit": "gram"
      }
    ]
  }

  recipeData = {
    "cookingTime": 20,
    "extra-ingredients": [
      {
        "name": "cheese",
        "quantity": 40,
        "unit": "gram"
      },
      {
        "name": "olive oil",
        "quantity": 30,
        "unit": "ml"
      }
    ],
    "likes": 66,
    "nutrition": {
      "carbs": 58,
      "energy": 630,
      "fat": 24,
      "protein": 10
    },
    "preferences": "Vegetarian",
    "steps": [
      {
        "description": "Cook your noodles in boiling, salted water, until the pasta is al dente.  Drain the pasta and reserve some of the pasta water.",
        "title": "cook the pasta"
      },
      {
        "description": "While the pasta is cooking, heat olive oil in a pan over medium heat. Add the garlic, and sauté until it starts to turn golden. Add the tomatoes, oregano, salt, and pepper, and cook for 3-4 minutes.",
        "title": "make the sauce"
      }
    ],
    "title": "Pasta with spinach and cherry tomatoes",
    "your-ingredients": [
      {
        "name": "pasta",
        "quantity": 80,
        "unit": "gram"
      },
      {
        "name": "spinach",
        "quantity": 100,
        "unit": "gram"
      }
    ]
  }
}


