import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCounterComponent } from './item-counter.component';

describe('ItemCounterComponent', () => {
  let component: ItemCounterComponent;
  let fixture: ComponentFixture<ItemCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
