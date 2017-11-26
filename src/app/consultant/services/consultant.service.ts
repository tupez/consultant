import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultant} from '../beans/consultant';
import { Observable } from 'rxjs/Observable';

const url = 'http://demopeople.exolever.com/api/consultants/';

@Injectable()
export class ConsultantService {

  constructor(private http: HttpClient) { }

  getConsultants (filter: string, orderField: string, orderDir: string): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(url + '?search=' + filter
      + '&ordering=' + (orderDir === 'asc' ? '' : '-') + orderField);
  }

  getConsultant(key: string): Observable<Consultant> {
    return this.http.get<Consultant>(url + key + '/');
  }

}
