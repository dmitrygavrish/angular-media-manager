import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ComponentData} from '../../../../../types/modal/index';

@Injectable()
export class ModalService {
  private _modalSequence$$: Subject<ComponentData> = new Subject();
  
  public open(componentObj: ComponentData): void {
    this._modalSequence$$.next(componentObj);
  }
  
  public close(): void {
    this._modalSequence$$.next(null);
  }
  
  public get modalSequence$(): Observable<ComponentData> {
    return this._modalSequence$$.asObservable();
  }
}
