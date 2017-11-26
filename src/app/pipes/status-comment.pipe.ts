import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusComment'
})
export class StatusCommentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    if (value === 'N') {
      result = 'No validated';
    } else if (value === 'V') {
      result = 'Verified';
    } else if (value === 'D') {
      result = 'Discarted';
    }
    return result;
  }

}
