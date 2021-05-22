import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimsComponent } from './sims.component';

describe('SimsComponent', () => {
  let component: SimsComponent;
  let fixture: ComponentFixture<SimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
