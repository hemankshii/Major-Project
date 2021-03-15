import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit{
  courseName = [];
  totalUsers :Array<number>=[];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = this.courseName;
  public pieChartData: SingleDataSet = this.totalUsers;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private as: AdminService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit(){
    this.as.getCourseState().subscribe((result)=> {
      result.forEach(x => {
        this.courseName.push(x.courseName)
        this.totalUsers.push(x.enrollments) 
      })
    })
    console.log(this.courseName);
    console.log(this.totalUsers);
    
  }

}
