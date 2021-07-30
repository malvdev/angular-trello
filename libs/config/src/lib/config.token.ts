import { InjectionToken } from '@angular/core';

export interface AppConfig {
  production: boolean;
  apiUrl: string;
  defaultLanguage: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APPLICATION_CONFIG');
