import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ListedRecipeComponent } from './listed-recipe/listed-recipe.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [RouterLink, ListedRecipeComponent, NgFor],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {

  constructor(private route: ActivatedRoute) {}
  
  cuisineName: string = "";
  
  ngOnInit() {
    this.cuisineName = this.route.snapshot.paramMap.get("name")!;
  }

  items = Array.from({ length: 110 }, (_, i) => `Item ${i + 1}`);
  pageSize = 15;
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.items.length / this.pageSize);
  }

  get pagedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(start, start + this.pageSize);
  }

  goToPage(page: number | string) {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  /** Returns an array of page numbers to display, with ellipsis */
  getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const total = this.totalPages;
    const current = this.currentPage;

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      // Always show first, last, current ±1
      pages.push(1);

      if (current > 3) pages.push('...');

      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (current < total - 2) pages.push('...');
      pages.push(total);
    }

    return pages;
  }
}
