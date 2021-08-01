import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFieldEntity } from '../../../entities';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input()
  field: DynamicFieldEntity;

  @Input()
  group: FormGroup;
}
