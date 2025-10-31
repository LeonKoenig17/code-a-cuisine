import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LikedRecipeComponent } from './liked-recipe/liked-recipe.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cookbook',
  standalone: true,
  imports: [LikedRecipeComponent, CuisineComponent, NgFor],
  templateUrl: './cookbook.component.html',
  styleUrl: './cookbook.component.scss'
})
export class CookbookComponent {

  collection = [
    {name: "Italian", icon: "🤌", img: "/assets/images/cookbook/italian.png"},
    {name: "German", icon: "🥨", img: "/assets/images/cookbook/german.png"},
    {name: "Japanese", icon: "🥢", img: "/assets/images/cookbook/japanese.png"},
    {name: "Gourmet", icon: "✨", img: "/assets/images/cookbook/gourmet.png"},
    {name: "Indian", icon: "🍛", img: "/assets/images/cookbook/indian.png"},
    {name: "Fusion", icon: "🍢", img: "/assets/images/cookbook/fusion.png"},
  ]

  @ViewChild('scroll', { static: true }) scrollContainer!: ElementRef<HTMLElement>;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  // Start dragging
  onMouseDown(event: MouseEvent) {
    // Only start for left mouse button
    if (event.button !== 0) return;

    this.isDown = true;
    const container = this.scrollContainer.nativeElement;
    // pageX minus container's left offset gives pointer position relative to container
    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;

    container.classList.add('active');

    // prevent text selection while dragging
    event.preventDefault();
  }

  // Global mousemove — keeps working even if cursor leaves container
  @HostListener('window:mousemove', ['$event'])
  onWindowMouseMove(event: MouseEvent) {
    if (!this.isDown) return;

    const container = this.scrollContainer.nativeElement;
    // compute distance moved from initial pointer
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1; // multiplier to adjust speed
    container.scrollLeft = this.scrollLeft - walk;

    // prevent selecting text while dragging
    event.preventDefault();
  }

  // Global mouseup — end dragging even if mouseup occurs outside container
  @HostListener('window:mouseup', ['$event'])
  onWindowMouseUp(event: MouseEvent) {
    if (!this.isDown) return;
    this.isDown = false;
    this.scrollContainer.nativeElement.classList.remove('active');
  }

  // Optional: stop dragging when the window loses focus (e.g., Alt+Tab)
  @HostListener('window:blur')
  onWindowBlur() {
    if (this.isDown) {
      this.isDown = false;
      this.scrollContainer.nativeElement.classList.remove('active');
    }
  }
}
