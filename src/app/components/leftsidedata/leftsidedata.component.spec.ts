import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsidedataComponent } from './leftsidedata.component';

describe('LeftsidedataComponent', () => {
  let component: LeftsidedataComponent;
  let fixture: ComponentFixture<LeftsidedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsidedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsidedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
