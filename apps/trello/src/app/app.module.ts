import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_CONFIG } from '@trello/libs/config';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],

  providers: [{ provide: APP_CONFIG, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
