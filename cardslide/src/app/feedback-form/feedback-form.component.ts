import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

export interface DialogData {
  feedback: string;
  rating : string;
}

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  
  
  userid: 1;
  courseid : 2;
  constructor(
    public dialogRef: MatDialogRef<FeedbackFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router : Router, private us : UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // addFed() {
  //   console.log(this.form.value.rating)
  //   this.us.addFeedback(this.userid, this.courseid, this.form.value.feedback, this.form.value.rating)
  //     .subscribe({
  //       next: () => {
  //         console.log("comment")
  //         this.router.navigate(['/coursedetail'], { queryParams: { courseid: btoa(String(this.courseid)) } })
  //       }
  //     })
  // }
  

}
