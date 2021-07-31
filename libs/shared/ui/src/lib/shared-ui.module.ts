import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button';
import { FormFieldModule } from './form-field';
import { IconSvgModule } from './icon-svg';

@NgModule({
  imports: [CommonModule, ButtonModule, FormFieldModule, IconSvgModule],
})
export class SharedUiModule {}
