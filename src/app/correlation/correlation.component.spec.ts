import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationComponent } from './correlation.component';
import { data_test1 } from '../3a_test1/3a_test1';
import { data_test2 } from '../3a_test2/3a_test2';
import { data_test3 } from '../3a_test3/3a_test3';
import { data_test4 } from '../3a_test4/3a_test4';

/*
describe('CorrelationComponent Test1', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent]
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9545 with the dataset Data_Test1', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test1().proxy_size;
    comp.listaY = data_test1().actual_added;
    expect(comp.calculateR()).toBeCloseTo(0.9545, 4);
  });

  it('Should return rr=0.9111 with the dataset Data_Test1', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test1().proxy_size;
    comp.listaY = data_test1().actual_added;
    expect(comp.calculateRR()).toBeCloseTo(0.9111, 4);
  });
});


describe('CorrelationComponent Test2', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent]
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9333 with the dataset Data_Test2', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test2().proxy_size;
    comp.listaY = data_test2().actual_develop;
    expect(comp.calculateR()).toBeCloseTo(0.9333, 4);
  });

  it('Should return rr=0.8711 with the dataset Data_Test2', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test2().proxy_size;
    comp.listaY = data_test2().actual_develop;
    expect(comp.calculateRR()).toBeCloseTo(0.8711, 4);
  });
});


describe('CorrelationComponent Test3', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent]
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9631 with the dataset Data_Test3', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test3().plan_added;
    comp.listaY = data_test3().actual_added;
    expect(comp.calculateR()).toBeCloseTo(0.9631, 4);
  });

  it('Should return rr=0.9276 with the dataset Data_Test3', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test3().plan_added;
    comp.listaY = data_test3().actual_added;
    expect(comp.calculateRR()).toBeCloseTo(0.9276, 4);
  });
});


describe('CorrelationComponent Test4', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent]
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9480 with the dataset Data_Test4', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test4().plan_added;
    comp.listaY = data_test4().actual_develop;
    expect(comp.calculateR()).toBeCloseTo(0.9480, 4);
  });

  it('Should return rr=0.8988 with the dataset Data_Test1', () => {
    var comp = new CorrelationComponent();
    comp.listaX = data_test4().plan_added;
    comp.listaY = data_test4().actual_develop;
    expect(comp.calculateRR()).toBeCloseTo(0.8988, 4);
  });
});
*/