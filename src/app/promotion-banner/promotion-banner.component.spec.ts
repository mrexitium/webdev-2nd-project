import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBannerComponent } from './promotion-banner.component';

describe('PromotionBannerComponent', () => {
  let component: PromotionBannerComponent;
  let fixture: ComponentFixture<PromotionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
