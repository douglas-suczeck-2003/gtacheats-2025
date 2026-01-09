import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtavi } from './gtavi';

describe('Gtavi', () => {
  let component: Gtavi;
  let fixture: ComponentFixture<Gtavi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtavi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtavi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
