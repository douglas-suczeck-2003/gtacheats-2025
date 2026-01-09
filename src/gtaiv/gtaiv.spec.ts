import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtaiv } from './gtaiv';

describe('Gtaiv', () => {
  let component: Gtaiv;
  let fixture: ComponentFixture<Gtaiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtaiv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtaiv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
