import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesVideosComponent } from './slides-videos.component';

describe('SlidesVideosComponent', () => {
  let component: SlidesVideosComponent;
  let fixture: ComponentFixture<SlidesVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
