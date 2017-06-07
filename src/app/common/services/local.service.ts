import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LocalService {
  public constructor(_http: Http) {
  }

  private _verifyAuthData(loginData: AuthLoginData): Observable<boolean> {
    const accounts = JSON.parse(localStorage.accounts);
    const requestedAccount = accounts.find(account => account.login === loginData.login);

    if (typeof requestedAccount !== 'undefined' || requestedAccount !== null) {
      return Observable.of(requestedAccount.password === loginData.password);
    } else {
      return Observable.of(false);
    }
  }

  public processLogin(loginData: AuthLoginData): Observable<AuthState> {
    return this._verifyAuthData(loginData).map((isValid: boolean) => {
      const authState: AuthState = {
        isLoggedIn: isValid
      };

      if (isValid) {
        authState.userLogin = loginData.login
      }

      return authState;
    });
  }



}
