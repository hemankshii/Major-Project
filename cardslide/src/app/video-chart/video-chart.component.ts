import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-video-chart',
  templateUrl: './video-chart.component.html',
  styleUrls: ['./video-chart.component.scss']
})
export class VideoChartComponent implements OnInit {
  courseName: Array<string> = [];
  videosize = [];
  chooseCategory: FormGroup
  selectedCategory: any;
  categories: any;
  courses: any;
  coursesByCat: any;
  coursesByCatCount: any;
  catName: any;
  all: any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  courseState: Array<any> = [];
  constructor(private as: AdminService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend(); 
  }
  ngOnInit() {
    this.chooseCategory = new FormGroup({
      categoryName: new FormControl()
    })

    this.as.getCategories()
      .subscribe((data) => {
        this.categories = data;
      },
        (err) => {
          console.log('Error is:', err);
        });

    this.as.getCourseState()
      .subscribe((data) => {
        this.courses = data;
        if (this.courses.length != 0)
        this.getGraph();
      },
        (err) => {
          console.log('Error is:', err);
        });
  }

  getGraph() {
    this.courseName = this.courses.map((data) => data.courseName);
    this.videosize = this.courses.map((data) => data.videosize);
    console.log(this.videosize);
    
    this.pieChartLabels = this.courseName;
    this.pieChartData = this.videosize;
  }

  getCoursesByCat(event: Event) {
    this.selectedCategory = (<HTMLSelectElement>event.target).value;
    if (this.selectedCategory == 'all') {
      this.getGraph();
    }
    else {
      this.coursesByCat = this.courses?.filter((x: any) => { return x.category == this.selectedCategory });
      console.log(this.coursesByCat);
      
      this.courseName = this.coursesByCat.map((data) => data.courseName);
      this.videosize = this.coursesByCat.map((data) => data.videosize);
      console.log(this.videosize);
      
      this.pieChartLabels = this.courseName;
      this.pieChartData =  this.videosize;

    }
  }



}
