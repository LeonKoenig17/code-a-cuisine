import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})
export class InstructionsComponent {
  imageSrc: string = "/assets/images/recipe/heart.png";

  toggleSrc() {
    this.imageSrc = 
      this.imageSrc === "/assets/images/recipe/heart.png"
        ? "/assets/images/recipe/heart-full.png"
        : "/assets/images/recipe/heart.png";
  }
}
