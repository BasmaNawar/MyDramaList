import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeguideComponent } from './episodeguide.component';

describe('EpisodeguideComponent', () => {
  let component: EpisodeguideComponent;
  let fixture: ComponentFixture<EpisodeguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
