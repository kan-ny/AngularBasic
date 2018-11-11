import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent implements OnInit {

  constructor(private _ser: DataService) { }

  ngOnInit() {
  }


  id: string;
  name : string;
  salary: string;
  dep: string;

  addEmp()
{
  let user = {
    'id': this.id,
    'name': this.name,
    'salary': this.salary,
    'dep': this.dep  
  }

  // this.passRecord = user;
   // this.arr.push(user);
console.log('aad emp ',user);
this._ser.dataSource = user;
alert(this.name+' is Added Sucessfully :)');

this.id = null;
this.name = null;
this.salary = null;
this.dep = null;
}

}
