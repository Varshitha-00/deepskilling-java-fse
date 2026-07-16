// Hands-On 10 — CourseService Unit Tests (vitest + HttpClientTestingModule)
// HttpTestingController intercepts HTTP calls without a real server.
// .verify() after each test asserts no unexpected requests were made.
// NOTE: getCourses() uses retry(2) — on error it retries 2 times before failing.
//       That means 3 total HTTP requests must be flushed in the error test.
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

const mockCourses: Course[] = [
  { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed'  },
  { id: 2, name: 'Algorithms',      code: 'CS102', credits: 3, gradeStatus: 'pending' }
];

const API_URL = 'http://localhost:3000/courses';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // Reset TestBed between tests to prevent "already instantiated" errors
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()   // overrides HttpClient with test backend
      ]
    });
    service  = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // verify() throws if any HTTP requests were made but not flushed
    httpMock.verify();
  });

  // Test — service is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test 107 — getCourses() GETs from API and returns courses
  it('should GET courses from the API', () => {
    let result: Course[] | undefined;

    service.getCourses().subscribe(c => (result = c));

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);

    expect(result).toBeDefined();
    expect(result!.length).toBe(2);
    expect(result![0].name).toBe('Data Structures');
  });

  // Test 108 — error handling: retry(2) = 3 total requests before error propagates
  it('should emit a user-friendly error on HTTP 500 after retries', () =>
    new Promise<void>((resolve, reject) => {
      service.getCourses().subscribe({
        next: () => reject(new Error('Expected error, got success')),
        error: (err: Error) => {
          expect(err.message).toBe('Failed to load courses. Please try again.');
          resolve();
        }
      });

      // retry(2) means 1 original + 2 retries = 3 HTTP requests total
      const req1 = httpMock.expectOne(API_URL);
      req1.flush('Error', { status: 500, statusText: 'Server Error' });

      const req2 = httpMock.expectOne(API_URL);
      req2.flush('Error', { status: 500, statusText: 'Server Error' });

      const req3 = httpMock.expectOne(API_URL);
      req3.flush('Error', { status: 500, statusText: 'Server Error' });
    })
  );

  // Test — getCourseById() GETs /courses/:id
  it('should GET a course by ID', () => {
    let result: Course | undefined;
    service.getCourseById(1).subscribe(c => (result = c));

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses[0]);

    expect(result!.name).toBe('Data Structures');
  });

  // Test — createCourse() POSTs to /courses
  it('should POST a new course', () => {
    const newCourse = { name: 'OS', code: 'CS301', credits: 3, gradeStatus: 'pending' as const };
    let created: Course | undefined;

    service.createCourse(newCourse).subscribe(c => (created = c));

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCourse);
    req.flush({ id: 6, ...newCourse });

    expect(created!.id).toBe(6);
  });

  // Test — deleteCourse() DELETEs /courses/:id
  it('should DELETE a course by ID', () => {
    let completed = false;
    service.deleteCourse(1).subscribe(() => (completed = true));

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);

    expect(completed).toBe(true);
  });

  // Test — getFallbackCourses() synchronous, no HTTP
  it('should return 5 fallback courses synchronously', () => {
    const courses = service.getFallbackCourses();
    expect(courses.length).toBe(5);
    expect(courses[0].code).toBe('CS101');
    httpMock.expectNone(API_URL);
  });
});
