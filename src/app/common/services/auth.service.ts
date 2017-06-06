import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {LocalService} from './local.service';

@Injectable()
export class AuthService {
  private _authState: AuthState = {isLoggedIn: true};
  private _authState$$: Subject<AuthState> = new Subject();

  public constructor(private _mainService: LocalService) {
  }

  public validateLogin(): void {
    this._mainService.processLogin().subscribe((isValid: boolean) => {
      this.updateAuth({isLoggedIn: isValid});
    });
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
