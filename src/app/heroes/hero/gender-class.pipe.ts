import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderClass'
})
export class GenderClassPipe implements PipeTransform {

  transform(gender: string): string {
    if (gender === 'Male') {
      return 'text-primary';
    }

    if (gender === 'Female') {
      return 'text-danger';
    }

    if (gender === 'Not available') {
      return 'text-muted';
    }
  }
}
