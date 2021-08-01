import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig, APP_CONFIG } from '@trello/libs/config';

import { CredentialsService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    @Inject(APP_CONFIG) private readonly _appConfig: AppConfig,
    private readonly _credentialsService: CredentialsService
  ) {}

  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this._credentialsService.getAuthToken();
    const isApiUrl = req.url.startsWith(this._appConfig.apiUrl);

    if (authToken && isApiUrl) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
