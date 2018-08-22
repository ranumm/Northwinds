import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdataTestComponent } from './odata-test.component';

describe('OdataTestComponent', () => {
  let component: OdataTestComponent;
  let fixture: ComponentFixture<OdataTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdataTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdataTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
