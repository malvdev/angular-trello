import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

export type IconTypes = 'google' | 'microsoft' | 'apple';

@Component({
  selector: 'app-ui-icon-svg',
  template: '<ng-content></ng-content>',
  styleUrls: ['./icon-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSvgComponent {
  @HostBinding('class')
  get classes(): string {
    return `app-icon-svg-${this.icon}`;
  }

  @Input()
  icon: IconTypes = 'google';
}
