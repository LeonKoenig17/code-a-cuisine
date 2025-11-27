import { Component, HostListener, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMobile = window.innerWidth < 800;
        
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }

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
