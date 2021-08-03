import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';

export type ColorTypes =
  | 'purple'
  | 'green'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow';

export type Label = {
  id: string;
  title: string;
  color?: ColorTypes;
};

@Component({
  selector: 'app-ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input()
  label: Label;

  @HostBinding('class')
  get classes(): string {
    return `${this.getColorClass()}`.trim();
  }

  getColorClass(): string {
    return 'app-label-' + (this.label?.color || 'blue');
  }
}
