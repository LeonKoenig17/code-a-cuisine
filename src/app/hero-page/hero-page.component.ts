import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {
  isMobile = window.innerWidth < 800;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 800;
  }
}
