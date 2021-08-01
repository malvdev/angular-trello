import { props, createAction } from '@ngrx/store';

import { DynamicFormErrors } from '../../entities';

export const setData = createAction(
  '[dynamic-form] SET_DATA',
  props<{ data: any }>()
);

export const updateData = createAction(
  '[dynamic-form] UPDATE_DATA',
  props<{ data: any; valid: boolean }>()
);

export const setStructure = createAction(
  '[dynamic-form] SET_STRUCTURE',
  props<{ structure: any }>()
);

export const setErrors = createAction(
  '[dynamic-form] SET_ERRORS',
  props<{ errors: DynamicFormErrors }>()
);

export const initializeErrors = createAction(
  '[dynamic-form] INITIALIZE_ERRORS'
);

export const initializeForm = createAction('[dynamic-form] INITIALIZE_FORM');

export const resetForm = createAction('[dynamic-form] RESET_FORM');
