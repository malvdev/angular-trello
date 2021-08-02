import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../header';
import { MainTemplateComponent } from './main-template.component';

@NgModule({
  declarations: [MainTemplateComponent],
  imports: [CommonModule, HeaderModule],
  exports: [MainTemplateComponent],
})
export class MainTemplateModule {}
