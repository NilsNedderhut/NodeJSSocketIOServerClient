import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatCardComponent } from './my-mat-card.component';

describe('MyMatCardComponent', () => {
  let component: MyMatCardComponent;
  let fixture: ComponentFixture<MyMatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
