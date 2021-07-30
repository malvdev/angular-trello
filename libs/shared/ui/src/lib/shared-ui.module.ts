import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button';
import { FormFieldModule } from './form-field';

@NgModule({
  imports: [CommonModule, ButtonModule, FormFieldModule],
})
export class SharedUiModule {}
