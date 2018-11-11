import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  // transform(table: any[],col: string, value: string): any[] {
  //   console.log('InPine', table, col, value);

  //   if(!table){return [];}
  //   if(!value){return table};
  //   if(value == '' || value == null){ return []; }
  //   return table.filter(obj => obj[col].toLowerCase().indexOf(value) > -1);
  // }

  transform(items: any[], value: string, label:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
    
  }

}
