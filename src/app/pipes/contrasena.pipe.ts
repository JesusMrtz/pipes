import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean): string {
    if (activar) {
      return '*'.repeat(value.length);
    }

    return value;
  }

}
