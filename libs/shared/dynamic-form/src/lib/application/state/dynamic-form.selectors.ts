import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DynamicFormEntity } from '../../entities';
import { DYNAMIC_FORM_FEATURE_KEY } from './dynamic-form.reducer';

const getDynamicForm = createFeatureSelector<DynamicFormEntity>(
  DYNAMIC_FORM_FEATURE_KEY
);

export const getStructure = createSelector(
  getDynamicForm,
  (state: DynamicFormEntity) => state.structure
);

export const getData = createSelector(
  getDynamicForm,
  (state: DynamicFormEntity) => state.data
);

export const isValid = createSelector(
  getDynamicForm,
  (state: DynamicFormEntity) => state.valid
);

export const getErrors = createSelector(
  getDynamicForm,
  (state: DynamicFormEntity) => state.errors
);

export const getTouchedForm = createSelector(
  getDynamicForm,
  (state: DynamicFormEntity) => state.touched
);

export const DynamicFormQuery = {
  getStructure,
  getData,
  isValid,
  getErrors,
  getTouchedForm,
};
