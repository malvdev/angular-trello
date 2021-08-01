import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { DynamicFormsState, DynamicFormQuery } from './state';
import * as DynamicFormActions from './state/dynamic-form.actions';

@Injectable()
export class DynamicFormFacade {
  data$ = this._store.select(DynamicFormQuery.getData);
  structure$ = this._store.select(DynamicFormQuery.getStructure);
  errors$ = this._store.select(DynamicFormQuery.getErrors);
  touched$ = this._store.select(DynamicFormQuery.getTouchedForm);
  valid$ = this._store.select(DynamicFormQuery.isValid);

  constructor(private readonly _store: Store<DynamicFormsState>) {}

  setStructure(structure: any): void {
    this._store.dispatch(DynamicFormActions.setStructure({ structure }));
  }

  setData(data: any): void {
    this._store.dispatch(DynamicFormActions.setData({ data }));
  }

  updateData(data: any, valid: boolean): void {
    this._store.dispatch(DynamicFormActions.updateData({ data, valid }));
  }

  initializeForm(): void {
    this._store.dispatch(DynamicFormActions.initializeForm());
  }

  initializeErrors(): void {
    this._store.dispatch(DynamicFormActions.initializeErrors());
  }

  resetForm(): void {
    this._store.dispatch(DynamicFormActions.resetForm());
  }
}
