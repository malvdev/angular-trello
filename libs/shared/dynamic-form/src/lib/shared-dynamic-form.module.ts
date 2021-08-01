import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FormFieldModule } from '@trello/libs/shared/ui';

import {
  DynamicFormEffects,
  DynamicFormFacade,
  DynamicFormInitialState,
  dynamicFormReducer,
  DYNAMIC_FORM_FEATURE_KEY,
} from './application';
import {
  DynamicFieldDirective,
  DynamicFormComponent,
  InputComponent,
  TextareaComponent,
  ListErrorsComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(DYNAMIC_FORM_FEATURE_KEY, dynamicFormReducer, {
      initialState: DynamicFormInitialState,
    }),
    EffectsModule.forFeature([DynamicFormEffects]),
    FormFieldModule,
  ],
  providers: [DynamicFormEffects, DynamicFormFacade],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    TextareaComponent,
    ListErrorsComponent,
  ],
  entryComponents: [InputComponent, TextareaComponent],
  exports: [DynamicFormComponent, ListErrorsComponent],
})
export class SharedDynamicFormModule {}
