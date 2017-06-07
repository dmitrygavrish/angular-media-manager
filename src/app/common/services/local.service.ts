import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LocalService {
  public constructor(_http: Http) {
  }

  public processLogin(): Observable<boolean> {
    
    return Observable.of(true);
  }

}
