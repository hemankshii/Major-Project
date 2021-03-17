import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-comment-chart',
  templateUrl: './comment-chart.component.html',
  styleUrls: ['./comment-chart.component.scss']
})
export class CommentChartComponent implements OnInit {

  data: [];
  courseName: Array<string> = [];
  totalcomment = [];
  chooseCategory: FormGroup
  selectedCategory: any;
  categories: any;
  courses: any;
  coursesByCat: any;
  coursesByCatCount: any;
  catName: any;
  all: any;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[];
  courseState: Array<any> = [];

  constructor(private as: AdminService) { }

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
    this.totalcomment = this.courses.map((data) => data.totalcomment);
    this.barChartLabels = this.courseName;
    this.barChartData = [{ data: this.totalcomment, label: 'Total Comments' }];
  }


  getCoursesByCat(event: Event) {

    // let coursename: Array<string> = [];
    // let totalcomment: Array<number> = [];
    this.selectedCategory = (<HTMLSelectElement>event.target).value;
    if (this.selectedCategory == 'all') {
      this.getGraph();
    }
    else {

      this.coursesByCat = this.courses?.filter((x: any) => { return x.category == this.selectedCategory });
      // this.coursesByCat?.forEach(element => {
      //   coursename.push(element.courseName);
      //   totalcomment.push(element.totalcomment);
      // });

      this.courseName = this.coursesByCat.map((data) => data.courseName);
      this.totalcomment = this.coursesByCat.map((data) => data.totalcomment);

      // this.courseName = coursename;
      // this.totalcomment = totalcomment;

      this.barChartLabels = this.courseName;
      this.barChartData = [{ data: this.totalcomment, label: 'Total Comments' }];
    }
  }
}
