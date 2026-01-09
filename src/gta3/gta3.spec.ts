import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gta3 } from './gta3';

describe('Gta3', () => {
  let component: Gta3;
  let fixture: ComponentFixture<Gta3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gta3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gta3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
