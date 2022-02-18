import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInStockComponent } from './model-in-stock.component';

describe('ModelInStockComponent', () => {
  let component: ModelInStockComponent;
  let fixture: ComponentFixture<ModelInStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelInStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
