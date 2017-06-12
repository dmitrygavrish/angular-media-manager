import {Component, Input, OnChanges} from '@angular/core';
import {searchItems} from '../../search-items';
import {Router} from '@angular/router';

@Component({
  selector: 'mm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  @Input('params')
  public params: AppRouteParams;
  public searchItems: SearchItem[] = searchItems;
  public activeMenuItem: number = 0;
  
  public constructor(private _router: Router) {
  }
  
  public onSearchItemPress(item: SearchItem): void {
    const pressedItemIndex: number = this.searchItems.indexOf(item);
    
    if (this.activeMenuItem !== pressedItemIndex) {
      this.activeMenuItem = this.searchItems.indexOf(item);
      this._router.navigate(['app', {type: 'search', key: item.key}]);
    }
  }
  
  public ngOnChanges(): void {
    this._applyActiveItemChanges();
  }
  
  private _applyActiveItemChanges(): void {
    if (this.params.type === 'favorite') {
      this.activeMenuItem = -1;
    }
  
    this.activeMenuItem = this.searchItems.findIndex((item: SearchItem) => item.key === this.params.key);
  }
}
