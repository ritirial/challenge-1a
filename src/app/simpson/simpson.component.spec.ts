import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';
import { f1_x, f2x, fx2 } from '../common/simpson_rule';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    expect(component.calculateSimpson(0, 4, 4, 0.0001, f2x)).toBeCloseTo(16.0, 1);
  });

  it('Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x2', () => {
    expect(component.calculateSimpson(0, 1, 4, 0.0001, fx2)).toBeCloseTo(0.3333, 4);
  });

  /*
  it('Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    expect(component.calculateSimpson(1, 4, 6, 0.001, f1_x)).toBeCloseTo(1.38, 2);
  });
  */

  it('Should return p=1.386 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    expect(component.calculateSimpson(1, 4, 6, 0.001, f1_x)).toBeCloseTo(1.386, 3);
  });
});
