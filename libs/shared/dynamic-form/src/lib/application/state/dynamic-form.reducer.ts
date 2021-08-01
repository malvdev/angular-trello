import { Action, createReducer, on } from '@ngrx/store';

import * as DynamicFormActions from './dynamic-form.actions';
import { DynamicFormEntity } from '../../entities';

export const DYNAMIC_FORM_FEATURE_KEY = 'dynamicForm';

export interface DynamicFormsState {
  readonly [DYNAMIC_FORM_FEATURE_KEY]: DynamicFormEntity;
}

export const DynamicFormInitialState: DynamicFormEntity = {
  data: {},
  structure: [],
  valid: false,
  errors: {},
  touched: false,
};

const reducer = createReducer(
  DynamicFormInitialState,
  on(DynamicFormActions.setData, (state, action) => ({
    ...state,
    data: action.data,
  })),
  on(DynamicFormActions.updateData, (state, action) => {
    const data = { ...state.data, ...action.data };
    return { ...state, data, touched: true, valid: action.valid };
  }),
  on(DynamicFormActions.setStructure, (state, action) => ({
    ...state,
    structure: action.structure.slice(0),
  })),
  on(DynamicFormActions.setErrors, (state, action) => ({
    ...state,
    errors: action.errors,
  })),
  on(DynamicFormActions.initializeErrors, (state) => ({
    ...state,
    errors: {},
  })),
  on(DynamicFormActions.initializeForm, () => DynamicFormInitialState),
  on(DynamicFormActions.resetForm, (state) => ({
    ...state,
    touched: false,
    valid: false,
  }))
);

export function dynamicFormReducer(
  state: DynamicFormEntity | undefined,
  action: Action
): DynamicFormEntity {
  return reducer(state, action);
}
