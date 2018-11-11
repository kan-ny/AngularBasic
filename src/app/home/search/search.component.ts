import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router) { }
  
  filter = 'id';
  searchText= ''; 

  ngOnInit() {
  }

  search(){
    console.log(this.filter, this.searchText);
    this._router.navigate(['/result', {col: this.filter, value:  this.searchText}]);
  }

}
