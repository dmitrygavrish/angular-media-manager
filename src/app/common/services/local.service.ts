import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {HttpService} from './http.service';

@Injectable()
export class LocalService {
  private _delayTime: number = 1000;
  
  public constructor(_http: HttpService) {
  }

  public processLogin(loginData: AuthLoginData): Observable<AuthState> {
    return this._verifyAuthLoginData(loginData).map((isValid: boolean) => {
      const authState: AuthState = {
        isLoggedIn: isValid
      };

      if (isValid) {
        authState.userLogin = loginData.login;
      }

      return authState;
    });
  }
  
  public processRegistration(regData: AuthRegData): Observable<boolean> {
    return this._verifyAuthRegData(regData);
  }
  
  private _verifyAuthLoginData(loginData: AuthLoginData): Observable<boolean> {
    if (localStorage.accounts) {
      const accounts: AccountData[] = JSON.parse(localStorage.accounts);
      const requestedAccount: AccountData =
        accounts.find((account: AccountData) => account.login === loginData.login);
      
      if (typeof requestedAccount !== 'undefined' || requestedAccount !== null) {
        return Observable.of(requestedAccount.password === loginData.password).delay(this._delayTime);
      }
    }
    
    return Observable.of(false).delay(this._delayTime);
  }
  
  private _verifyAuthRegData(regData: AuthRegData): Observable<boolean> {
    if (!localStorage.accounts) {
      localStorage.accounts = [];
    }
    
    localStorage.push({
      login: regData.loginGroup.login,
      email: regData.loginGroup.email,
      password: regData.passwordGroup.password,
      personal: {
        firstName: regData.nameGroup.firstName,
        secondName: regData.nameGroup.secondName
      }
    });
    
    return Observable.of(true);
  }
}
