import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingComponent } from './serving.component';

describe('ServingComponent', () => {
  let component: ServingComponent;
  let fixture: ComponentFixture<ServingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
