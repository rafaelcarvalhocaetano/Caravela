import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


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
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MenuComponent,
    TableComponent,
    CardComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
