// Hands-On 5 — Reactive Form
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl,
  Validators, AbstractControl, ValidationErrors, ReactiveFormsModule
} from '@angular/forms';

// ── Custom Sync Validator ─────────────────────────────────────────
// Returns ValidationErrors when invalid, null when valid
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value?.toString() ?? '';
  if (value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// ── Custom Async Validator ────────────────────────────────────────
// Fires AFTER all sync validators pass (avoids unnecessary checks)
// Returns Promise<ValidationErrors | null>
export function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (control.value?.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName:       ['', [Validators.required, Validators.minLength(3)]],
      // 3rd argument = async validators array
      studentEmail:      ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId:          ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      // Validators.requiredTrue checks checkbox is checked
      agreeToTerms:      [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  // Typed getter — better than casting in template
  // TypeScript catches type errors at compile time here
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    // .value excludes disabled controls
    // .getRawValue() includes ALL controls including disabled
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }
}
