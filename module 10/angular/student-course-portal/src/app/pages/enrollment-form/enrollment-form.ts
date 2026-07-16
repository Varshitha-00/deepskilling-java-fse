// Hands-On 4 — Template-Driven Form
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {
  submitted = false;

  // Called on form submit — NgForm gives access to full form state
  onSubmit(form: NgForm): void {
    console.log('Form value:', form.value);
    console.log('Form valid:', form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }

  // Resets all fields and clears all validation states
  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
