import { Component, OnInit } from '@angular/core';
import { Vocation } from 'src/app/core/models/vocation';
import { VocationsService } from 'src/app/core/service/vocations/vocations.service';

@Component({
  selector: 'vc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public itens: Vocation [];
  public actionList = false;
  public id: number;


  constructor(
    private service: VocationsService
  ) {  }


  ngOnInit() {
    this.findList();
  }


  public clickAction(data: number) {
    this.actionList = false;
    if (data) {
      this.actionList = !this.actionList;
    }
  }

  public ack(data) {
    this.id = data;
  }

  private findList() {
    this.service.findAll().subscribe(resp => this.itens = resp);
  }

}
