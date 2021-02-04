import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableComponent } from './data-table.component';



@NgModule({
  declarations: [DataTableComponent],
  imports: [
    BrowserModule,
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }
