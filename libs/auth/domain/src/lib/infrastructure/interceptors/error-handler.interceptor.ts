import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private readonly _router: Router) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(catchError((error) => this._errorHandler(error)));
  }

  private _errorHandler(response: any): Observable<any> {
    if (response.error.statusCode === HttpStatusCode.Unauthorized) {
      // TODO: need to refresh token
      this._router.navigate(['/login']);
    }

    throw response;
  }
}
