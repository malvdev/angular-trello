import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedDynamicFormModule } from '@trello/libs/shared/dynamic-form';
import { AuthTemplateModule } from '@trello/libs/auth/ui';
import { ButtonModule } from '@trello/libs/shared/ui';

import { RegisterRoutingModule } from './auth-feature-register-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedDynamicFormModule,
    AuthTemplateModule,
    ButtonModule,
    RegisterRoutingModule,
  ],
  declarations: [RegisterComponent],
})
export class AuthFeatureRegisterModule {}
