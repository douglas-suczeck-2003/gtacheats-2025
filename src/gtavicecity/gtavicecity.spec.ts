import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtavicecity } from './gtavicecity';

describe('Gtavicecity', () => {
  let component: Gtavicecity;
  let fixture: ComponentFixture<Gtavicecity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtavicecity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtavicecity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
