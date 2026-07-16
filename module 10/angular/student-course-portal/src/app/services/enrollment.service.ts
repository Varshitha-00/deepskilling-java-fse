// Hands-On 6/8 — EnrollmentService
// Service-to-service injection: CourseService injected here.
// Now uses fallback sync data so enrollment works even before HO-9 NgRx store.
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from './course.service';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  // Service-to-service DI — Angular resolves CourseService from root injector
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  // Uses fallback sync data — will be replaced by NgRx store in HO-9
  getEnrolledCourses(): Course[] {
    return this.courseService.getFallbackCourses()
      .filter(c => this.enrolledCourseIds.includes(c.id));
  }

  getEnrolledIds(): number[] {
    return [...this.enrolledCourseIds];
  }
}
