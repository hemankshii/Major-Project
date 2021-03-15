import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http'; 
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})



export class BarChartComponent implements OnInit{
  
  data: []
  courseName = [];
 
  likes = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.courseName;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: this.likes, label: 'Likes' }
  ];
  
  constructor(private as: AdminService) { } 
  ngOnInit() {
    this.as.getCourseState().subscribe((result)=> {
      result.forEach(x => {
        this.courseName.push(x.courseName)
        this.likes.push(x.likes)
        console.log(x);
      })
    })
    console.log(this.likes);
    console.log(this.courseName);
   
    
    
    
  }

}