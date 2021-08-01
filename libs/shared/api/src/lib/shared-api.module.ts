import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './infrastructure';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
})
export class SharedApiModule {}
