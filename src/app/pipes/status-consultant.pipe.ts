import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusConsultant'
})
export class StatusConsultantPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    if (value === 'A') {
      result = 'Active';
    } else if (value === 'P') {
      result = 'Pending';
    } else if (value === 'D') {
      result = 'Canceled';
    }
    return result;
  }

}
