import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { VocationsService } from './service/vocations/vocations.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    VocationsService,
  ]
})
export class CoreModule { }
