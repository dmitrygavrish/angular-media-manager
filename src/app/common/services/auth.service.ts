import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private _authState: AuthState = {isLoggedIn: false};
  private _authState$$: Subject<AuthState> = new Subject();
  
  public constructor() {
  }
  
  public updateAuth(authState: AuthState): void {
    // allow passing incomplete AuthState objects by rewriting only those
    // stored _authState properties that were passed in authState argument
    for (const key in authState) {
      this._authState[key] = authState[key];
    }
    
    this._authState$$.next(authState);
  }
  
  public get isLoggedIn(): boolean {
    return this._authState.isLoggedIn;
  }
  
  public get authState$(): Observable<AuthState> {
    return this._authState$$.asObservable();
  }
}
