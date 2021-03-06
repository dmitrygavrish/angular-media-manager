import {environment} from 'environments/environment';
import {InjectionToken} from '@angular/core';

export const BASE_URL: string = environment.baseAPIUrl;
export const BASE_URL_TOKEN: InjectionToken<string> = new InjectionToken(BASE_URL);
