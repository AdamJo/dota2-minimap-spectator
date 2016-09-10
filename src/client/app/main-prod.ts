/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */
import { AppModuleNgFactory } from './app.module.ngfactory';
import { platformBrowser } from '@angular/platform-browser';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
