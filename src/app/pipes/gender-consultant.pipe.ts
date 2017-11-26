import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderConsultant'
})
export class GenderConsultantPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    if (value === 'W') {
      result = 'women';
    } else if (value === 'M') {
      result = 'men';
    }
    return result;
  }

}
