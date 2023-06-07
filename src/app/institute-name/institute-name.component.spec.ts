import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteNameComponent } from './institute-name.component';

describe('InstituteNameComponent', () => {
  let component: InstituteNameComponent;
  let fixture: ComponentFixture<InstituteNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
