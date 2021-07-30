import { AppConfig } from '@trello/libs/config';

export const environment: AppConfig = {
  production: false,
  apiUrl: 'http://localhost:4200/api',
  defaultLanguage: 'en-US',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
