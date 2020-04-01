import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventDialogboxComponent } from './add-event-dialogbox.component';

describe('AddEventDialogboxComponent', () => {
  let component: AddEventDialogboxComponent;
  let fixture: ComponentFixture<AddEventDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
