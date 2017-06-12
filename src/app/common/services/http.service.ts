import {Injectable} from '@angular/core';
import {
  BaseRequestOptions,
  Headers,
  Http,
  Request,
  RequestOptionsArgs,
  Response,
  XHRBackend
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class HttpService extends Http {
  private _defaultArgs: RequestOptionsArgs = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'GET'
  };
  
  public constructor(_backend: XHRBackend,
                     _defaultOptions: BaseRequestOptions) {
    super(_backend, _defaultOptions);
  }
  
  public get<T>(url: string,
                options?: RequestOptionsArgs): Observable<T> {
    const reqOptions: RequestOptionsArgs = this._defaultArgs;
    
    reqOptions.url = url;
    
    for (const key in options) {
      reqOptions[key] = options[key];
    }
    
    return this.request(new Request(this._defaultOptions.merge(reqOptions)))
      .map((res: Response) => res.json())
      .catch((err: Error) => Observable.of([]));
  }
}
