import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtav } from './gtav';

describe('Gtav', () => {
  let component: Gtav;
  let fixture: ComponentFixture<Gtav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
