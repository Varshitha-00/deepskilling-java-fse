import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl,
  Validators, AbstractControl, ValidationErrors, ReactiveFormsModule
} from '@angular/forms';

export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value?.toString() ?? '';
  if (value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

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
      studentEmail:      ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId:          ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms:      [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

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
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }
}
