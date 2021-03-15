import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  addFeedback(userid:number,courseid:number,feedback:String,rating:number): Observable<any>{
    return this.http.post('http://localhost:9000/user/feedback?courseid='+courseid+'&userid='+userid+'&feedback_msg='+feedback+'&rating='+rating,"")
  }
}
