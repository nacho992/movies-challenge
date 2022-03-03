import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesCardsComponent } from './slides-cards.component';

describe('SlidesCardsComponent', () => {
  let component: SlidesCardsComponent;
  let fixture: ComponentFixture<SlidesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
