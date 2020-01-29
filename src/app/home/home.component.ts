import { Component, OnInit } from '@angular/core';
import { VocationsService } from '../core/service/vocations/vocations.service';
import { Vocation } from '../core/models/vocation';

@Component({
  selector: 'vc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list: Vocation [] = [];

  constructor(
  ) { }

  ngOnInit() {
  }



}
