import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModalService} from './modal.service';
import {ComponentData} from '../../../../../types/modal/index';

@Component({
  selector: 'mm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContent', {read: ViewContainerRef})
  public modal: ViewContainerRef;
  public childComponent: ComponentFactory<{}>;
  public modalContext: ComponentRef<{}>;
  public isOpen: boolean = false;
  
  public constructor(private _modalService: ModalService,
                     private _componentFactoryResolver: ComponentFactoryResolver) {
  }
  
  public ngOnInit(): void {
    this._modalService.modalSequence$
      .subscribe((componentObj: ComponentData) => {
        if (componentObj) {
          this.childComponent = this._componentFactoryResolver.resolveComponentFactory(componentObj.component);
          this.modalContext = this.modal.createComponent(this.childComponent);
          this.isOpen = true;
          
          for (const key in componentObj.context) {
            this.modalContext.instance[key] = componentObj.context[key];
          }
        } else {
          this.close();
        }
      });
  }
  
  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27): void {
    if (code === 27) {
      this.isOpen = false;
      
      if (this.modalContext) {
        this.modalContext.destroy();
      }
    }
  }
}
