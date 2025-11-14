import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() data: any = {};
  minutes: string = "";

  ngOnInit() {
    switch (this.data.cookingTime) {
      case "Quick":
        this.minutes = "20min";
      break;
      case "Medium":
        this.minutes = "25-40min";
      break;
      case "Complex":
        this.minutes = "over 45min";
      break;
    
      default:
        break;
    }
  }
}
