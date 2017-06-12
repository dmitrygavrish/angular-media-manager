import {Component, OnInit} from '@angular/core';
import {FavoritesService} from '../../../common/services/favorites.service';
import {ModalService} from '../../../common/components/modal/modal.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {searchItems} from '../search-items';
import {favoriteItems} from '../favorite-items';

@Component({
  selector: 'mm-favorite-create',
  templateUrl: './favorite-create.component.html',
  styleUrls: ['./favorite-create.component.scss']
})
export class FavoriteCreateComponent implements OnInit {
  public formModel: FormGroup;
  public searchItems: SearchItem[] = searchItems;
  public favoriteItems: FavoriteItem[] = favoriteItems.filter((item: FavoriteItem) => item.key !== 'all');
  public isCreateProceeding: boolean = false;
  
  public constructor(private _fb: FormBuilder,
                     private _favService: FavoritesService,
                     private _modalService: ModalService) {
  }
  
  public ngOnInit(): void {
    this.formModel = this._fb.group({
      title: ['', [Validators.required]],
      category: ['all', [Validators.required]],
      type: ['collection', [Validators.required]]
    });
  }
  
  public onSubmit(favData: FavoritesMetadata): void {
    this._favService.addFavoritesItem(favData);
    this._modalService.close();
  }
}
