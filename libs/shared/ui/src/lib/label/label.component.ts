import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';

import { LabelEntity } from '@trello/libs/board/domain';

@Component({
  selector: 'app-ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input()
  label: LabelEntity;

  @HostBinding('class')
  get classes(): string {
    return `${this.getColorClass()}`.trim();
  }

  getColorClass(): string {
    return 'app-label-' + (this.label?.color || 'blue');
  }
}
