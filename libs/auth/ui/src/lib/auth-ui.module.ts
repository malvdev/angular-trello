import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthTemplateModule } from './auth-template';

@NgModule({
  imports: [CommonModule, AuthTemplateModule],
})
export class AuthUiModule {}
