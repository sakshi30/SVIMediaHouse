import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMarketComponent } from './service-market.component';

describe('ServiceMarketComponent', () => {
  let component: ServiceMarketComponent;
  let fixture: ComponentFixture<ServiceMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
