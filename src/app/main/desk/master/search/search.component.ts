import {Component} from '@angular/core';
import {searchItems} from '../../search-items';
import {Router} from '@angular/router';

@Component({
  selector: 'mm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
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
}
