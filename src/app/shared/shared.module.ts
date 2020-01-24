import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    MenuComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    TableComponent
  ]
})
export class SharedModule { }
