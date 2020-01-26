import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingshowsComponent } from './upcomingshows.component';

describe('UpcomingshowsComponent', () => {
  let component: UpcomingshowsComponent;
  let fixture: ComponentFixture<UpcomingshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
