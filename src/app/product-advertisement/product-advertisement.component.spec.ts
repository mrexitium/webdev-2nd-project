import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdvertisementComponent } from './product-advertisement.component';

describe('ProductAdvertisementComponent', () => {
  let component: ProductAdvertisementComponent;
  let fixture: ComponentFixture<ProductAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
