import { Component,OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent  implements OnInit{
  courseName = [];
  avgrating = [];
  
  lineChartData: ChartDataSets[] = [
    { data: this.avgrating, label: 'Ratings' },
  ];

  lineChartLabels: Label[] = this.courseName;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor(private as: AdminService) { }
  ngOnInit(): void {
    this.as.getCourseState().subscribe((result)=>{
      result.forEach(x => {
        this.courseName.push(x.courseName)
        this.avgrating.push(x.avgrating)
      });
    })

    console.log(this.courseName);
    console.log(this.avgrating);
    
  }

 
}
