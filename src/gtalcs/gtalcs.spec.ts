import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtalcs } from './gtalcs';

describe('Gtalcs', () => {
  let component: Gtalcs;
  let fixture: ComponentFixture<Gtalcs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtalcs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtalcs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
