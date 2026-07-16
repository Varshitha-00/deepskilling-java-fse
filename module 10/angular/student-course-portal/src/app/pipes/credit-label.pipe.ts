import { Pipe, PipeTransform } from '@angular/core';

// Custom pipe — usage in template: {{ course.credits | creditLabel }}
// pure: true (default) — only recalculates when input reference changes
// pure: false would recalculate every change detection cycle — avoid unless necessary
@Pipe({
  name: 'creditLabel',
  standalone: true,
  pure: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    if (credits == null || credits === 0) return 'No Credits';
    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
