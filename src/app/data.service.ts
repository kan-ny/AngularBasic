import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { dataModel } from './dataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _array: any[] = [];
 private _dataSource = new BehaviorSubject<Array<any>>([]);
  public cast = this._dataSource.asObservable();

  set dataSource(obj){
    this._array.push(obj);
    this._dataSource.next(this._array);
  }

}
