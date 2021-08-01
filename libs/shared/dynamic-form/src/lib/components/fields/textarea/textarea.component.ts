import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFieldEntity } from '../../../entities';

@Component({
  selector: 'app-dynamic-form-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
  @Input()
  field: DynamicFieldEntity;

  @Input()
  group: FormGroup;
}
