import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoDisplayComponent } from './video-display/video-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PaginationComponent } from './pagination/pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { VideoChartComponent } from './video-chart/video-chart.component';
import { CommentChartComponent } from './comment-chart/comment-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoDisplayComponent,  
    FeedbackFormComponent, DeleteModalComponent, BarChartComponent, LineChartComponent, PieChartComponent, PaginationComponent, VideoChartComponent, CommentChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,  
    MatDialogModule, 
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, ReactiveFormsModule, FormsModule, ChartsModule, MatPaginatorModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
