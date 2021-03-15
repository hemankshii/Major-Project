import { Component } from '@angular/core';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import {MatDialog} from '@angular/material/dialog';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardslide';

  // animal: string;
  // name: string;

  // constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(FeedbackFormComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
}


