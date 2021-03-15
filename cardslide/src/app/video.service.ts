import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http : HttpClient) { }
  getVideos(): Observable<Video>{
    return this.http.get<Video>('http://localhost:9000/user/enrolledcourses/video/2/30')
  }

  nextVideo(courseid, userid, videoid): Observable<any>{
    return this.http.get('http://localhost:9000/user/nextvideo/'+courseid+'/'+userid+'/'+videoid)
  }

  completeVideo(courseid, userid, videoid): Observable<any>{
    return this.http.put('http://localhost:9000/user/completevideo/'+courseid+'/'+userid+'/'+videoid, "")
    
    
  }

}
