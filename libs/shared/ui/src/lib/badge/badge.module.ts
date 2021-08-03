import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, MatIconModule],
  exports: [BadgeComponent],
})
export class BadgeModule {}
