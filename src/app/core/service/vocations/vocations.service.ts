import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, delay } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Vocation } from '../../models/vocation';

@Injectable({
  providedIn: 'root'
})
export class VocationsService {

  private endpoint = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<Vocation[]> {
    return this.http.get<Vocation[]>(`${this.endpoint}/vocations`);
  }
}
