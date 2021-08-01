import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedDynamicFormModule } from '@trello/libs/shared/dynamic-form';
import { AuthTemplateModule } from '@trello/libs/auth/ui';
import { ButtonModule } from '@trello/libs/shared/ui';

import { ForgotComponent } from './forgot/forgot.component';
import { AuthFeatureForgotRoutingModule } from './auth-feature-forgot-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthFeatureForgotRoutingModule,
    SharedDynamicFormModule,
    AuthTemplateModule,
    ButtonModule,
  ],
  declarations: [ForgotComponent],
  exports: [ForgotComponent],
})
export class AuthFeatureForgotModule {}
