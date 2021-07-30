import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button';

@NgModule({
  imports: [CommonModule, ButtonModule],
})
export class SharedUiModule {}
