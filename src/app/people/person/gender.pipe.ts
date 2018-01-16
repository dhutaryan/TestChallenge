import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(gender: string): string {
    if(!gender) {
      return;
    }

    if (gender === 'male') {
      return 'Male';
    }

    if (gender === 'female') {
      return 'Female';
    }

    if (gender === 'n/a') {
      return 'Not available';
    }
  }

}
