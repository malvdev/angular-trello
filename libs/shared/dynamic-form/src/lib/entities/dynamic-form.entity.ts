import { DynamicFieldEntity } from './dynamic-field.entity';

export interface DynamicFormEntity {
  data: any;
  structure: DynamicFieldEntity[];
  valid: boolean;
  errors: DynamicFormErrors;
  touched: boolean;
}

export interface DynamicFormErrors {
  [key: string]: string;
}
