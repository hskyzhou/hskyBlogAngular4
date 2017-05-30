import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWorkUpdateComponent } from './today-work-update.component';

describe('TodayWorkUpdateComponent', () => {
  let component: TodayWorkUpdateComponent;
  let fixture: ComponentFixture<TodayWorkUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayWorkUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWorkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
