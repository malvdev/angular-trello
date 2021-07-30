import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  AuthGuard,
  AuthService,
  CredentialsService,
  StoragesModule,
  AuthInterceptor,
  ErrorHandlerInterceptor,
} from './infrastructure';

@NgModule({
  imports: [CommonModule, StoragesModule],
  providers: [
    AuthService,
    CredentialsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthDomainModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthDomainModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. It should only be imported in your application's main module.`
      );
    }
  }
}
