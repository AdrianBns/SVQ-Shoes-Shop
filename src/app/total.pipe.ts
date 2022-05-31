import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item-list/item.model';

@Pipe({
  name: 'total'
})

export class TotalPipe implements PipeTransform {

  transform(value: Item[], args?: any): number {
    return value.reduce((prev: any, current:any) => prev + current[args], 0);
  }

}
/* Creación de una Pipe personalizada que suma el stock total de nuestra tienda */
