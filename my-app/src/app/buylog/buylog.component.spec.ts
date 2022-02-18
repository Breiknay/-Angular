import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuylogComponent } from './buylog.component';

describe('BuylogComponent', () => {
  let component: BuylogComponent;
  let fixture: ComponentFixture<BuylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuylogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
