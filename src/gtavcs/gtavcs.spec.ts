import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtavcs } from './gtavcs';

describe('Gtavcs', () => {
  let component: Gtavcs;
  let fixture: ComponentFixture<Gtavcs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtavcs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtavcs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
