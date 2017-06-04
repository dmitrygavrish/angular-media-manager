import {Component} from '@angular/core';
import {searchItems} from '../../search-items';

@Component({
  selector: 'mm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchItems: SearchItem[] = searchItems;
  
  public onSearchItemPress(item: SearchItem): void {
  
  }
}
