import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixComponentComponent } from './six-component.component';

describe('SixComponentComponent', () => {
  let component: SixComponentComponent;
  let fixture: ComponentFixture<SixComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
