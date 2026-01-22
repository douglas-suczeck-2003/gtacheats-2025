import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtaadvance } from './gtaadvance';

describe('Gtaadvance', () => {
  let component: Gtaadvance;
  let fixture: ComponentFixture<Gtaadvance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtaadvance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtaadvance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
