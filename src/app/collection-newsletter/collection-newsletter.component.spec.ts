import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionNewsletterComponent } from './collection-newsletter.component';

describe('CollectionNewsletterComponent', () => {
  let component: CollectionNewsletterComponent;
  let fixture: ComponentFixture<CollectionNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
