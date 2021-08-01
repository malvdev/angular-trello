import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedDynamicFormModule } from '@trello/libs/shared/dynamic-form';
import { AuthTemplateModule } from '@trello/libs/auth/ui';
import { ButtonModule, IconSvgModule } from '@trello/libs/shared/ui';
import { OauthButtonModule } from '@trello/libs/auth/ui';

import { LoginComponent } from './login/login.component';
import { AuthFeatureLoginRoutingModule } from './auth-feature-login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedDynamicFormModule,
    AuthFeatureLoginRoutingModule,
    AuthTemplateModule,
    ButtonModule,
    IconSvgModule,
    OauthButtonModule,
  ],
  declarations: [LoginComponent],
})
export class AuthFeatureLoginModule {}
