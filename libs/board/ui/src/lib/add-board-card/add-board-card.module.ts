import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { ButtonModule, FocusAndSelectModule } from '@trello/libs/shared/ui';

import { AddBoardCardComponent } from './add-board-card.component';

@NgModule({
  declarations: [AddBoardCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    FocusAndSelectModule,
    ButtonModule,
  ],
  exports: [AddBoardCardComponent],
})
export class AddBoardCardModule {}
