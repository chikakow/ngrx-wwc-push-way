import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvanceStudentsComponent } from './edit-advance-students.component';

describe('EditAdvanceStudentsComponent', () => {
  let component: EditAdvanceStudentsComponent;
  let fixture: ComponentFixture<EditAdvanceStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdvanceStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdvanceStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
