import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvFormComponentsComponent } from './adv-form-components.component';

describe('AdvFormComponentsComponent', () => {
  let component: AdvFormComponentsComponent;
  let fixture: ComponentFixture<AdvFormComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvFormComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvFormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
