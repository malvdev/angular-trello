import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthTemplateComponent } from './auth-template.component';
import { AuthLogoComponent } from './auth-logo/auth-logo.component';

@NgModule({
  declarations: [AuthTemplateComponent, AuthLogoComponent],
  imports: [CommonModule, RouterModule],
  exports: [AuthTemplateComponent],
})
export class AuthTemplateModule {}
