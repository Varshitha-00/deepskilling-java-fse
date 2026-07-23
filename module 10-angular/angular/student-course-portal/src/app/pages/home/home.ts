import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesAvailable = 0;
  enrolledCount = 0;
  gpa = 3.8;

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.coursesAvailable = this.courseService.getFallbackCourses().length;
    this.enrolledCount = this.enrollmentService.getEnrolledIds().length;
    console.log('HomeComponent initialised — courses loaded:', this.coursesAvailable);
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
