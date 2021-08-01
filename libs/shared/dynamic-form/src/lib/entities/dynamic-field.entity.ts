import { ValidatorFn } from '@angular/forms';

export interface DynamicFieldEntity {
  type: DynamicFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  validator?: ValidatorFn[];
  attrs?: { [key: string]: string | number };
}

export type DynamicFieldType = 'INPUT' | 'TEXTAREA' | 'CHECKBOX';
