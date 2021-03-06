import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {LocalService} from './local.service';

@Injectable()
export class RegService {
  public constructor(private _mainService: LocalService) {
  }
  
  public validateRegistration(regData: AuthRegData): Observable<boolean> {
    return this._mainService.processRegistration(regData);
  }
  
  public validateLogin(login: string): Observable<boolean> {
    return this._mainService.confirmUserData('login', login);
  }
  
  public validateEmail(email: string): Observable<boolean> {
    return this._mainService.confirmUserData('email', email);
  }
}
