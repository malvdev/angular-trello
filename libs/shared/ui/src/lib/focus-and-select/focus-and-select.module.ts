import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusAndSelectDirective } from './focus-and-select.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FocusAndSelectDirective],
  exports: [FocusAndSelectDirective],
})
export class FocusAndSelectModule {}
