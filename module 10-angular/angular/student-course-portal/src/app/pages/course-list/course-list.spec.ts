// Hands-On 10 — CourseListComponent Unit Tests with MockStore (vitest)
// MockStore replaces the real NgRx store — no reducers or effects run.
// store.overrideSelector() + store.refreshState() simulates any state scenario.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { vi } from 'vitest';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { CourseList } from './course-list';
import { Course } from '../../models/course.model';
import { LoadingService } from '../../services/loading.service';
import {
  selectAllCourses,
  selectCoursesLoading,
  selectCoursesError
} from '../../store/course/course.selectors';
import { loadCourses } from '../../store/course/course.actions';

const mockCourses: Course[] = [
  { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed'  },
  { id: 2, name: 'Algorithms',      code: 'CS102', credits: 3, gradeStatus: 'pending' }
];

const initialState = {
  course:     { courses: mockCourses, loading: false, error: null },
  enrollment: { enrolledCourseIds: [] }
};

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  // Test 109 — TestBed setup with MockStore and initial state
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideRouter([]),
        LoadingService,
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: { get: () => null } } }
        }
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => store.resetSelectors());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test — dispatches loadCourses action on ngOnInit
  it('should dispatch loadCourses on init', () => {
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(loadCourses());
  });

  // Test — renders course cards from initial state
  it('should render course cards from the store', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(2);
  });

  // Test 110 — loading state: .loading paragraph visible when loading selector emits true
  it('should show loading indicator when store loading is true', async () => {
    store.overrideSelector(selectCoursesLoading, true);
    store.overrideSelector(selectAllCourses, []);
    store.overrideSelector(selectCoursesError, null);
    store.refreshState();

    fixture.detectChanges();
    await fixture.whenStable();

    const loading = fixture.debugElement.query(By.css('.loading'));
    expect(loading).toBeTruthy();
    expect(loading.nativeElement.textContent.trim()).toBe('Loading courses...');
  });

  // Test — error banner visible when store has an error
  it('should display error banner when store has an error', async () => {
    store.overrideSelector(selectCoursesError, 'Failed to load courses. Please try again.');
    store.overrideSelector(selectCoursesLoading, false);
    store.overrideSelector(selectAllCourses, []);
    store.refreshState();

    fixture.detectChanges();
    await fixture.whenStable();

    const errorBanner = fixture.debugElement.query(By.css('.error-banner'));
    expect(errorBanner).toBeTruthy();
    expect(errorBanner.nativeElement.textContent).toContain('Failed to load courses');
  });

  // Test — empty message shown when courses is empty
  it('should show empty message when courses array is empty', async () => {
    store.overrideSelector(selectAllCourses, []);
    store.overrideSelector(selectCoursesLoading, false);
    store.overrideSelector(selectCoursesError, null);
    store.refreshState();

    fixture.detectChanges();
    await fixture.whenStable();

    const empty = fixture.debugElement.query(By.css('.empty'));
    expect(empty).toBeTruthy();
  });

  // Test — retry() dispatches loadCourses
  it('should dispatch loadCourses when retry() is called', () => {
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    component.retry();
    expect(dispatchSpy).toHaveBeenCalledWith(loadCourses());
  });

  // Test — applyFilter() filters by name
  it('should filter courses by search term', () => {
    component.allCourses = mockCourses;
    component.searchTerm = '';
    component.applyFilter();
    expect(component.filteredCourses.length).toBe(2);

    component.searchTerm = 'data';
    component.applyFilter();
    expect(component.filteredCourses.length).toBe(1);
    expect(component.filteredCourses[0].name).toBe('Data Structures');
  });

  // Test — applyFilter() filters by course code
  it('should filter courses by course code', () => {
    component.allCourses = mockCourses;
    component.searchTerm = 'cs102';
    component.applyFilter();
    expect(component.filteredCourses.length).toBe(1);
    expect(component.filteredCourses[0].code).toBe('CS102');
  });
});
