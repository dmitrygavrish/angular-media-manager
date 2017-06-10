import {Component} from '@angular/core';
import {ModalService} from '../modal.service';

@Component({
  selector: 'mm-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent {
  public constructor(private _modalService: ModalService) {
  }
  
  public onCloseBtnPress(): void {
    this._modalService.close();
  }
}
