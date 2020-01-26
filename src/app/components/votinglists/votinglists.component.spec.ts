import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotinglistsComponent } from './votinglists.component';

describe('VotinglistsComponent', () => {
  let component: VotinglistsComponent;
  let fixture: ComponentFixture<VotinglistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotinglistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotinglistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
