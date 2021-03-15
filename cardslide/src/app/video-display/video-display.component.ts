import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';


export interface DialogData {
  feedback: string;
  rating: string;
}

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss']
})
export class VideoDisplayComponent implements OnInit, AfterViewInit {
  videoList: any
  videourl: any
  videoId: any
  isCompleted: false
  feedback: string
  rating: string;
  ended: boolean;


  constructor(private vs: VideoService, public dialog: MatDialog) {

    // this.videoList = this.vs.getVideos();
    // console.log(this.videoList);
    // this.videoList =this.vs.getVideos().subscribe({
    //   next:()=>{console.log("Fetched all videos")
    //   }
    // })
  }
  @ViewChild('video') video;



  ngOnInit(): void {
    this.vs.getVideos()
      .subscribe((data) => {
        this.videoList = data;
        console.log(this.videoList);
      },
        (err) => {
          console.log('Error is:', err);
        });
  }

  fetch(path, videoid) {

    console.log(videoid)
    this.vs.nextVideo(2, 30, videoid).subscribe((x) => {

      if (x) {
        this.videourl = path
        this.videoId = videoid

      }
      else {
        alert("you need to complete previous video")
      }
    });

    // console.log(a);``

  }

  doubleplayback() {
    // element.nativeElement.shadowRoot.querySelector('#video')
    this.video.nativeElement.playbackRate = 2;
    // console.log(">>>>>>>>>>>",this.video.nativeElement.playbackRate);
  }


  ngAfterViewInit() {
    let a = setInterval(() => {
      this.ended = this.video.nativeElement.ended
      if (this.ended === true) {
        console.log(this.videoId);
        this.vs.completeVideo(2, 30, this.videoId).subscribe((x) => {
          console.log("Success");
          this.isCompleted = x;
          console.log(x);
          this.ended === false  
        })
      
      }
    }, 1000);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      width: '250px',
      data: {feedback: this.feedback, rating:  this.rating}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result.feedback);
      console.log(result.rating);
    });
  }

  sureDelete() {
    const dialogRef = this.dialog.open(DeleteModalComponent, {width: '250px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


