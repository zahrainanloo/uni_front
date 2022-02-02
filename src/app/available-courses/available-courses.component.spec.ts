import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCoursesComponent } from './available-courses.component';

describe('AvailableCoursesComponent', () => {
  let component: AvailableCoursesComponent;
  let fixture: ComponentFixture<AvailableCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
