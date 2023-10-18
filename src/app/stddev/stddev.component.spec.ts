import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StddevComponent } from './stddev.component';
import { proxy_size } from '../1a_proxy_size/1a_proxy_size';
import { dev_hours } from '../1a_dev_hours/1a_dev_hours';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent]
    });
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return stddev=572.03 with the data: 160,591,114,229,230,270,128,1657,624,1503', () => {
    expect(component.stddev(proxy_size())).toBeCloseTo(572.03, 2);
  });

  it('Should return stddev=62.26 with the data: 15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2', () => {
    expect(component.stddev(dev_hours())).toBeCloseTo(62.26, 2);
  });
});
