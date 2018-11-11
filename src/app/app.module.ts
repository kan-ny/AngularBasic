import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEmpComponent } from './home/add-emp/add-emp.component';
import { TableComponent } from './home/table/table.component';
import { SearchComponent } from './home/search/search.component';
import { ResultComponent } from './home/result/result.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DataService } from './data.service';
import { FilterTablePipe } from './filter-table.pipe'; 


const r: Routes = [
  { path: '', component: HomeComponent, children: [
   
    { path:'addEmp', component: AddEmpComponent },
    { path:'result', component: ResultComponent },
    { path:'search', component: SearchComponent },
    { path:'table', component: TableComponent },
  ] 
},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmpComponent,
    TableComponent,
    SearchComponent,
    ResultComponent,
    FilterTablePipe,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(r),
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
