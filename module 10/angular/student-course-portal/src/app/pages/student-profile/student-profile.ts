import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit {

  student = {
    name: 'Alice Johnson',
    email: 'alice@college.edu',
    gpa: 3.8,
    year: '3rd Year'
  };

  enrolledCourses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }
}
