import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appUiInitials',
})
export class InitialsPipe implements PipeTransform {
  public transform(value: string): unknown {
    return value
      .split(' ')
      .map((n) => n[0])
      .join('');
  }
}
