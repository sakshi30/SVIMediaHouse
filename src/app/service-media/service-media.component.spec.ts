import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMediaComponent } from './service-media.component';

describe('ServiceMediaComponent', () => {
  let component: ServiceMediaComponent;
  let fixture: ComponentFixture<ServiceMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
