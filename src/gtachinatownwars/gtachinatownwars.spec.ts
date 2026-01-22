import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtachinatownwars } from './gtachinatownwars';

describe('Gtachinatownwars', () => {
  let component: Gtachinatownwars;
  let fixture: ComponentFixture<Gtachinatownwars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtachinatownwars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtachinatownwars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
