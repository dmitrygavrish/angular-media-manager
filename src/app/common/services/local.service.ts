import {Inject, Injectable} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {HttpService} from './http.service';
import {BASE_URL_TOKEN} from '../../../config';

@Injectable()
export class LocalService {
  private _delayTime: number = 1000;
  
  public constructor(private _http: HttpService,
                     @Inject(BASE_URL_TOKEN) private _baseUrl: string) {
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
  
  public confirmUserData(field: 'login' | 'email', value: string): Observable<boolean> {
    if (localStorage.accounts) {
      const accounts: AccountData[] = JSON.parse(localStorage.accounts);
      const isTaken: boolean = accounts.some((account: AccountData) => account[field] === value);
      
      return Observable.of(!isTaken).delay(this._delayTime);
    }
    
    return Observable.of(true).delay(this._delayTime);
  }
  
  public processSearchRequest(query: string, entity: string, attributes: string[]): Observable<SearchResponse> {
    const url: string = `${this._baseUrl}/search`;
    const search: URLSearchParams = new URLSearchParams();
  
    search.set('term', query);
    search.set('media', entity);
    search.set('attribute', attributes.toString());
  
    return this._http.get<SearchResponse>(url, {params: search});
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
      localStorage.accounts = JSON.stringify([]);
    }
    
    let accounts: AccountData[];
  
    try {
      accounts = JSON.parse(localStorage.accounts);
    } catch (err) {
      accounts = [];
    }
    
    accounts.push({
      login: regData.loginGroup.login,
      email: regData.loginGroup.email,
      password: regData.passwordGroup.password,
      personal: {
        firstName: regData.nameGroup.firstName,
        secondName: regData.nameGroup.secondName
      }
    });
    
    localStorage.accounts = JSON.stringify(accounts);
    
    return Observable.of(true).delay(this._delayTime);
  }
}
