import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcComponent } from './searc.component';

describe('SearcComponent', () => {
  let component: SearcComponent;
  let fixture: ComponentFixture<SearcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
