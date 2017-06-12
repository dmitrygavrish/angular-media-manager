import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {searchItems} from '../../search-items';
import {SearchService} from '../../../../common/services/search.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'mm-detail-place',
  templateUrl: './detail-place.component.html',
  styleUrls: ['./detail-place.component.scss']
})
export class DetailPlaceComponent implements OnInit, OnChanges {
  @Input('currentContent')
  public currentContent: string;
  public searchItems: SearchItem[] = searchItems;
  public searchPlaceholder: string;
  public mainSearchParam: string;
  public searchAttributes: { data: SearchAttribute, isApplied?: boolean }[];
  public searchResults: Observable<SearchResult[]>;
  private _searchInput$$: Subject<string> = new Subject();
  
  public constructor(private _searchService: SearchService) {
  }
  
  public ngOnInit(): void {
    this._searchInput$$
      .debounceTime(450)
      .distinctUntilChanged()
      .subscribe((value: string) => {
        this._search(value);
      });
    
    this.searchResults = this._searchService.searchResults$;
  }
  
  public ngOnChanges(): void {
    this._applyToolbarChanges();
  }
  
  public onSearchInputChange(value: string): void {
    this._searchInput$$.next(value);
  }
  
  public onAttributeCheckboxChange(value: string): void {
    this._search(value);
  }
  
  private _search(value: string): void {
    const attributes: string[] = this.searchAttributes
      .filter((attr: { data: SearchAttribute, isApplied?: boolean }) => attr.isApplied)
      .map((attr: { data: SearchAttribute, isApplied?: boolean }) => attr.data.attribute);
  
    this._searchService.search(value, this.mainSearchParam, attributes);
  }
  
  private _applyToolbarChanges(): void {
    const currentContent: SearchItem = this.searchItems
      .find((item: SearchItem) => item.key === this.currentContent);
    
    this.searchPlaceholder = `Search ${currentContent.name.toLowerCase()}`;
    this.mainSearchParam = currentContent.requestParameters.main;
    this.searchAttributes = currentContent.requestParameters.searchAttributes
      .map((attr: SearchAttribute) => {
        return {data: attr};
      });
  }
}
