import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDetailComponent } from './enter-detail.component';

describe('EnterDetailComponent', () => {
  let component: EnterDetailComponent;
  let fixture: ComponentFixture<EnterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
