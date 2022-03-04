import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToprateComponent } from './toprate.component';

describe('ToprateComponent', () => {
  let component: ToprateComponent;
  let fixture: ComponentFixture<ToprateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToprateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToprateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
