import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfStudentComponent } from './details-of-student.component';

describe('DetailsOfStudentComponent', () => {
  let component: DetailsOfStudentComponent;
  let fixture: ComponentFixture<DetailsOfStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
