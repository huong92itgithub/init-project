import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenComponentComponent } from './seven-component.component';

describe('SevenComponentComponent', () => {
  let component: SevenComponentComponent;
  let fixture: ComponentFixture<SevenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
