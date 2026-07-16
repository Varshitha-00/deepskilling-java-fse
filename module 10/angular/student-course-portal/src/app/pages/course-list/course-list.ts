import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { LoadingService } from '../../services/loading.service';
import { loadCourses } from '../../store/course/course.actions';
import {
  selectAllCourses,
  selectCoursesLoading,
  selectCoursesError
} from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCard, FormsModule, AsyncPipe],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit, OnDestroy {

  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  // filteredCourses is a plain array — no getter, no new reference per cycle
  filteredCourses: Course[] = [];
  allCourses: Course[] = [];

  selectedCourseId: number | null = null;
  searchTerm = '';

  private coursesSub!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    const searchParam = this.route.snapshot.queryParamMap.get('search');
    if (searchParam) this.searchTerm = searchParam;

    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$   = this.store.select(selectCoursesError);

    // Subscribe to store — update filteredCourses when store emits
    this.coursesSub = this.store.select(selectAllCourses).subscribe(courses => {
      this.allCourses = courses;
      this.applyFilter();
    });

    this.store.dispatch(loadCourses());
  }

  onSearchChange(): void {
    this.applyFilter();
    this.router.navigate(['courses'], {
      queryParams: this.searchTerm ? { search: this.searchTerm } : {},
      replaceUrl: true
    });
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredCourses = term
      ? this.allCourses.filter(
          c => c.name.toLowerCase().includes(term) || c.code.toLowerCase().includes(term)
        )
      : [...this.allCourses];
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }

  viewDetail(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  retry(): void {
    this.store.dispatch(loadCourses());
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  ngOnDestroy(): void {
    this.coursesSub?.unsubscribe();
  }
}
