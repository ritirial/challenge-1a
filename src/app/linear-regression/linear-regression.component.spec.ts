import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRegressionComponent } from './linear-regression.component';
import { data_test1 } from '../3a_test1/3a_test1';
import { data_test2 } from '../3a_test2/3a_test2';
import { data_test3 } from '../3a_test3/3a_test3';
import { data_test4 } from '../3a_test4/3a_test4';

/*
describe('LinearRegressionComponent Data_Test1', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return B0=-22.55 with the dataset Data_Test1', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test1().proxy_size;
    comp.listaY = data_test1().actual_added;
    expect(comp.calculateB0()).toBeCloseTo(-22.55, 2);
  });

  it('Should return B1=1.7279 with the dataset Data_Test1', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test1().proxy_size;
    comp.listaY = data_test1().actual_added;
    expect(comp.calculateB1()).toBeCloseTo(1.7279, 4);
  });

  it('Should return return yk=644.429 with the dataset Data_Test1 if x=386', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test1().proxy_size;
    comp.listaY = data_test1().actual_added;
    expect(comp.calculateYk(386)).toBeCloseTo(644.429, 3);
  });
});

describe('LinearRegressionComponent Data_Test2', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return B0=-4.039 with the dataset Data_Test2', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test2().proxy_size;
    comp.listaY = data_test2().actual_develop;
    expect(comp.calculateB0()).toBeCloseTo(-4.039, 3);
  });

  it('Should return B1=0.1681 with the dataset Data_Test2', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test2().proxy_size;
    comp.listaY = data_test2().actual_develop;
    expect(comp.calculateB1()).toBeCloseTo(0.1681, 4);
  });

  it('Should return return yk=60.858 with the dataset Data_Test2 if x=386', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test2().proxy_size;
    comp.listaY = data_test2().actual_develop;
    expect(comp.calculateYk(386)).toBeCloseTo(60.858, 3);
  });
});

describe('LinearRegressionComponent Data_Test3', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return B0=-23.92 with the dataset Data_Test3', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test3().plan_added;
    comp.listaY = data_test3().actual_added;
    expect(comp.calculateB0()).toBeCloseTo(-23.92, 2);
  });

  it('Should return B1=1.43097 with the dataset Data_Test3', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test3().plan_added;
    comp.listaY = data_test3().actual_added;
    expect(comp.calculateB1()).toBeCloseTo(1.43097, 5);
  });

  it('Should return return yk=528.4294 with the dataset Data_Test3 if x=386', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test3().plan_added;
    comp.listaY = data_test3().actual_added;
    expect(comp.calculateYk(386)).toBeCloseTo(528.4294, 4);
  });
});

describe('LinearRegressionComponent Data_Test4', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return B0=-4.604 with the dataset Data_Test4', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test4().plan_added;
    comp.listaY = data_test4().actual_develop;
    expect(comp.calculateB0()).toBeCloseTo(-4.604, 3);
  });

  it('Should return B1=0.14016 with the dataset Data_Test4', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test4().plan_added;
    comp.listaY = data_test4().actual_develop;
    expect(comp.calculateB1()).toBeCloseTo(0.14016, 5);
  });

  it('Should return return yk=49.4994 with the dataset Data_Test4 if x=386', () => {
    var comp = new LinearRegressionComponent();
    comp.listaX = data_test4().plan_added;
    comp.listaY = data_test4().actual_develop;
    expect(comp.calculateYk(386)).toBeCloseTo(49.4994, 4);
  });
});
*/