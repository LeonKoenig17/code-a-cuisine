import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedRecipeComponent } from './listed-recipe.component';

describe('ListedRecipeComponent', () => {
  let component: ListedRecipeComponent;
  let fixture: ComponentFixture<ListedRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
