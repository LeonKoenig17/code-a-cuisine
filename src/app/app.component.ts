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
        if (event.url === '/' || event.url === '/hero') { // adjust path to your hero page
          this.renderer.addClass(body, 'bg-green');
          this.logoPath = "/assets/images/logo-white.png";
        } else {
          // All other pages → white
          this.renderer.addClass(body, 'bg-white');
          this.logoPath = "/assets/images/logo-green.png";
        }
      });
  }
}
