import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { ListCardsComponent } from './list-cards.component';

@NgModule({
  declarations: [ListCardsComponent],
  imports: [CommonModule, FormsModule, MatIconModule, MatMenuModule],
  exports: [ListCardsComponent],
})
export class ListCardsModule {}
