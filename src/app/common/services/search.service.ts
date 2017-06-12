import {Injectable} from '@angular/core';
import {LocalService} from './local.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/do';

@Injectable()
export class SearchService {
  private _searchResults$$: Subject<SearchResult[]> = new Subject();
  
  public constructor(private _mainService: LocalService) {
  }
  
  public search(query: string, entity: string, attributes: string[]): void {
    this._mainService.processSearchRequest(query, entity, attributes)
      .subscribe((response: SearchResponse) => {
        this._searchResults$$.next(response.results);
      });
  }
  
  public get searchResults$(): Observable<SearchResult[]> {
    return this._searchResults$$.asObservable();
  }
}
