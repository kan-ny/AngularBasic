import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  tableArray: any[];
  col: string;
  value: string;

  constructor(private data: DataService, private _ar: ActivatedRoute) { }

  ngOnInit() {
    this.data.cast.subscribe(res => this.tableArray = res );
    
    console.log(this.tableArray, this._ar.snapshot.paramMap.get('col'), this._ar.snapshot.paramMap.get('value'));

    this.col = this._ar.snapshot.paramMap.get('col')
    this.value = this._ar.snapshot.paramMap.get('value')
  }

}
