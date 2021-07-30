import { Directive, HostBinding, Input } from '@angular/core';

type ButtonTypes = 'base' | 'link' | 'primary' | 'secondary' | 'third';

@Directive({
  selector: '[appSharedUiButton]',
})
export class ButtonDirective {
  @HostBinding('class')
  get classes(): string {
    return `app-button app-button_${this.type}`;
  }

  @Input('appSharedUiButtonType')
  type: ButtonTypes = 'base';
}
