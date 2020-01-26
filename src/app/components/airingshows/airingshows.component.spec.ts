import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringshowsComponent } from './airingshows.component';

describe('AiringshowsComponent', () => {
  let component: AiringshowsComponent;
  let fixture: ComponentFixture<AiringshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiringshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiringshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
