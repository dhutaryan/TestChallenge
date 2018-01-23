import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderClass'
})
export class GenderClassPipe implements PipeTransform {
  private genders = {
    Male: 'text-primary',
    Female: 'text-danger',
    'Not available': 'text-muted',
  };

  transform(gender: string): string {
    return this.genders[gender];
  }
}
