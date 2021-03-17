import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageEvent:PageEvent;
  constructor() { }

  
// data : ["Keyur", "KP", "darshan", "Ritu", "hgdsf", "sdfhgwekh", "hgfvgher", "sdhgfsdhf"];
//   // MatPaginator Inputs
//   length = 5;
//   pageSize = 5;
//   pageSizeOptions: number[] = [5, 10, 25, 100];

//   // MatPaginator Output
//   pageEvent: PageEvent;

//   setPageSizeOptions(setPageSizeOptionsInput: string) {
//     if (setPageSizeOptionsInput) {
//       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
//     }
//   }

colleges: any[] = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }, { name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }, { name: "13" }];

  filteredArray: any[] = []

  defaultRecords: any = 5;

  ngOnInit() {
    this.filteredArray = this.colleges.slice(0, this.defaultRecords);
    console.log("Inside on init");
    
  }

  onPaginateChange(data) {
    console.log(data);
    this.filteredArray = this.colleges.slice(((data.pageSize)*data.pageIndex), (data.pageIndex+1)*data.pageSize);
    
  }

}
