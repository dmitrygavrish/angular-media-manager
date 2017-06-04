import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
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
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdInputModule,
    MdSelectModule
  ],
  declarations: []
})
export class MaterialModule {
}
