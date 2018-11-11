import { Component, OnInit } from '@angular/core';

import { DataService } from './../../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private _ser: DataService) { }

  tableArray: any[]= [];

  ngOnInit() {
    console.log(this._ser.cast.subscribe(res=> {
      this.tableArray = res;
      console.log(res);
      
    }))
  }



}
