import {
  Component, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, OnInit
} from '@angular/core';
import { NgClass, NgStyle, AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { Course } from '../../models/course.model';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

export type { Course };

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgClass, NgStyle, HighlightDirective, CreditLabelPipe, AsyncPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges, OnInit {

  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  isEnrolled$!: Observable<boolean>;

  // Store border style as a fixed property — NOT a getter
  // Getters return new objects on every change detection cycle → infinite loop
  cardBorderStyle: Record<string, string> = {};

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.updateBorderStyle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course'] && this.course) {
      console.log(
        'ngOnChanges — course changed:',
        'previous:', changes['course'].previousValue,
        '→ current:', changes['course'].currentValue
      );
      // Set border style once — not in a getter
      this.updateBorderStyle();
      // Derive per-card enrollment Observable from the store
      this.isEnrolled$ = this.store.select(selectEnrolledIds).pipe(
        map(ids => ids.includes(this.course.id))
      );
    }
  }

  private updateBorderStyle(): void {
    if (!this.course) return;
    const colors: Record<string, string> = {
      passed: 'green', failed: 'red', pending: '#9e9e9e'
    };
    // Assign once — Angular only re-renders when reference changes
    this.cardBorderStyle = {
      'border-left': `4px solid ${colors[this.course.gradeStatus] ?? '#9e9e9e'}`
    };
  }

  onEnrollClick(): void {
    const id = this.course.id;
    // take(1) = one-shot read, no memory leak
    this.store.select(selectEnrolledIds).pipe(take(1)).subscribe(ids => {
      if (ids.includes(id)) {
        this.store.dispatch(unenrollFromCourse({ courseId: id }));
      } else {
        this.store.dispatch(enrollInCourse({ courseId: id }));
      }
    });
    this.enrollRequested.emit(id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
