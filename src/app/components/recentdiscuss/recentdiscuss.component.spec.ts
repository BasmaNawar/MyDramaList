import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentdiscussComponent } from './recentdiscuss.component';

describe('RecentdiscussComponent', () => {
  let component: RecentdiscussComponent;
  let fixture: ComponentFixture<RecentdiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentdiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentdiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
