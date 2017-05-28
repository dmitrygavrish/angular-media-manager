import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private _appState$$: Subject<any> = new Subject();
  
  public constructor() {
  }
  
  public get isLoggedIn(): boolean {
    return true;
  }
  
  public test(): void {
    this._appState$$.next({
      isLoggedId: true
    });
  }
  
  public get appState$(): Observable<any> {
    return this._appState$$.asObservable();
  }
}
