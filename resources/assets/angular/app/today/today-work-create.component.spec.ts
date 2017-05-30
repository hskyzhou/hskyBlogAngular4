import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWorkCreateComponent } from './today-work-create.component';

describe('TodayWorkCreateComponent', () => {
  let component: TodayWorkCreateComponent;
  let fixture: ComponentFixture<TodayWorkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayWorkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWorkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
