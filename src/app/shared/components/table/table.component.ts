import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public actionList = false;
  constructor() { }

  ngOnInit() {
  }

  clickAction(data: number) {
    this.actionList = false;
    if (data) {
      this.actionList = !this.actionList;
    }
  }

}
