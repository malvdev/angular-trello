import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_CONFIG } from '@trello/libs/config';
import { SharedApiModule } from '@trello/libs/shared/api';
import { AuthDomainModule } from '@trello/libs/auth/domain';
import { AuthFeatureLoginModule } from '@trello/libs/auth/feature-login';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedApiModule,
    AuthDomainModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    AuthFeatureLoginModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  providers: [{ provide: APP_CONFIG, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
