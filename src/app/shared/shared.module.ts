import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    MenuComponent,
    TableComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    TableComponent,
    CardComponent
  ]
})
export class SharedModule { }
