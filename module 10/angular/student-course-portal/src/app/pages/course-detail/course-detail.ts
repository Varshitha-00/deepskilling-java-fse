import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {
  course: Course | undefined;
  errorMessage = '';
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (isNaN(id)) {
      this.errorMessage = 'Invalid course ID.';
      this.isLoading = false;
      return;
    }

    // Step 1 — Load from fallback immediately so page always shows something
    this.course = this.courseService.getCourseByIdSync(id);
    this.isLoading = false;

    if (!this.course) {
      this.errorMessage = `Course with ID ${id} not found.`;
    }

    // Step 2 — Try HTTP to get live data, update if successful
    this.courseService.getCourseById(id).subscribe({
      next: course => {
        this.course = course;
        this.errorMessage = '';
      },
      error: () => {
        // Fallback already shown above — no action needed
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }
}
