// Hands-On 10 — CourseCardComponent Unit Tests (vitest)
// Tests: component creation, @Input rendering, @Output emission, ngOnChanges
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { vi } from 'vitest';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';

const mockCourse: Course = {
  id: 1,
  name: 'Data Structures',
  code: 'CS101',
  credits: 4,
  gradeStatus: 'passed'
};

const initialState = {
  course:     { courses: [], loading: false, error: null },
  enrollment: { enrolledCourseIds: [] }
};

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  // Test 101 — TestBed setup
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

    // Set @Input and manually trigger ngOnChanges before change detection
    component.course = mockCourse;
    component.ngOnChanges({
      course: new SimpleChange(undefined, mockCourse, true)
    });
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => store.resetSelectors());

  // Test 102 — component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 103 — @Input rendering: course name in h3
  it('should display the course name in h3', () => {
    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3).toBeTruthy();
    expect(h3.nativeElement.textContent.trim()).toBe('Data Structures');
  });

  // Test 104 — @Output: clicking Enroll emits enrollRequested with course.id
  it('should emit enrollRequested with course.id on Enroll click', () => {
    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');

    const btn = fixture.debugElement.query(By.css('.btn-enroll'));
    expect(btn).toBeTruthy();
    btn.nativeElement.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith(mockCourse.id);
  });

  // Test 105 — ngOnChanges: logs previous and current course values
  it('should log previous and current values in ngOnChanges', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const updatedCourse: Course = { ...mockCourse, name: 'Algorithms' };

    component.ngOnChanges({
      course: new SimpleChange(mockCourse, updatedCourse, false)
    });

    expect(logSpy).toHaveBeenCalledWith(
      'ngOnChanges — course changed:',
      'previous:', mockCourse,
      '→ current:', updatedCourse
    );
    logSpy.mockRestore();
  });

  // Bonus — badge rendered for gradeStatus
  it('should show Passed badge for passed gradeStatus', () => {
    const badge = fixture.debugElement.query(By.css('.badge--passed'));
    expect(badge).toBeTruthy();
    expect(badge.nativeElement.textContent.trim()).toBe('Passed');
  });

  // Bonus — Show Details toggles isExpanded
  it('should toggle isExpanded when Show Details button is clicked', () => {
    expect(component.isExpanded).toBe(false);
    const detailBtn = fixture.debugElement.query(By.css('.btn-details'));
    detailBtn.nativeElement.click();
    fixture.detectChanges();
    expect(component.isExpanded).toBe(true);
  });
});
