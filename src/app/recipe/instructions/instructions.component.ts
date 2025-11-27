import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})
export class InstructionsComponent {

  isMobile = window.innerWidth < 800;
  imageSrc: string = "";
        
  @HostListener('window:resize')
  onResize() {
    this.updateImage();
  }
  
  ngOnInit() {
    this.updateImage();
  }
  
  private updateImage() {
    this.isMobile = window.innerWidth < 800;
    this.imageSrc = this.isMobile ? "/assets/images/recipe/instructions-resp.png" : "/assets/images/recipe/instructions.png";
  }
  
  @Input() data: any = {};
  heartSrc: string = "/assets/images/recipe/heart.png";

  toggleSrc() {
    this.heartSrc = 
      this.heartSrc === "/assets/images/recipe/heart.png"
        ? "/assets/images/recipe/heart-full.png"
        : "/assets/images/recipe/heart.png";
  }
}
