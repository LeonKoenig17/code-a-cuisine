import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
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

  items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  currentPage = 1;
  pageSize = 15;

  get pagedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(start, start + this.pageSize);
  }

  nextPage() {
    if ((this.currentPage * this.pageSize) < this.items.length) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  totalPages() {
    return Math.ceil(this.items.length / this.pageSize);
  }
}
