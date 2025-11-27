import { NgFor } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {
  isMobile = window.innerWidth < 800;
  imageSrc: string = "";
  
  @Input() data: any = {};
  
  @HostListener('window:resize')
  onResize() {
    this.updateImage();
  }
  
  ngOnInit() {
    this.updateImage();
  }
  
  private updateImage() {
    this.isMobile = window.innerWidth < 800;
    this.imageSrc = this.isMobile ? "/assets/images/recipe/ingredients-resp.png" : "/assets/images/recipe/ingredients.png";
  }
}
