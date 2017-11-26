import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment} from '../beans/comment';
import { Observable } from 'rxjs/Observable';

const url = 'http://demopeople.exolever.com/api/comment/';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(url, comment);
  }

}
