import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {

  transform(gender: string): string {
    const genders = {
      male: 'Male',
      female: 'Female',
      'n/a': 'Not available',
    }

    return genders[gender];
  }

}
