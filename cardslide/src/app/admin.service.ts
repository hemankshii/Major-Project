import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getCourseState(): Observable<any>{
    return this.http.get<any>('http://localhost:9000/admin/coursereports')
  }

}