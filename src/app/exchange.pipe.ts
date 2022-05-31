import { Pipe, PipeTransform } from '@angular/core';

const exchange = new Map<string, number>([
  ["USD", 1.10],
  ["GBP", 0.82],
  ["JPY", 127.75]
]);

@Pipe({
  name: 'exchange'
})
export class ExchangePipe implements PipeTransform {

  transform(value: number, arg: string): number {
    if( arg !== undefined && exchange.has(arg)) {
      return exchange.get(arg)!*value;
    }
    return 0;
  }

}
