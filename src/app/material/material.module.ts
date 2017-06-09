import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdInputModule,
    MdSelectModule,
    MdSnackBarModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdInputModule,
    MdSelectModule,
    MdSnackBarModule
  ],
  declarations: []
})
export class MaterialModule {
}
