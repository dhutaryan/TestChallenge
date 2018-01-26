import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {

  transform(gender: string): string {
    const genders = {
      male: 'Male',
      female: 'Female',
      hermaphrodite: 'Hermaphrodite',
      'n/a': 'Not available',
      none: 'Not available',
    }

    return genders[gender];
  }

}
