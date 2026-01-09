import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gtasanandreas } from './gtasanandreas';

describe('Gtasanandreas', () => {
  let component: Gtasanandreas;
  let fixture: ComponentFixture<Gtasanandreas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gtasanandreas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gtasanandreas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
