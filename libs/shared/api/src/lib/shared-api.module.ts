import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './infrastructure';

@NgModule({
  imports: [CommonModule],
  providers: [ApiService],
})
export class SharedApiModule {}
