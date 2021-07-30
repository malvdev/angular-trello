import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AuthGuard,
  AuthService,
  CredentialsService,
  StoragesModule,
} from './infrastructure';

@NgModule({
  imports: [CommonModule, StoragesModule],
  providers: [AuthService, CredentialsService, AuthGuard],
})
export class AuthDomainModule {}
