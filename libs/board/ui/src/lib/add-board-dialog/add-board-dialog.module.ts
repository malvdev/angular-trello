import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ButtonModule } from '@trello/libs/shared/ui';

import { AddBoardDialogComponent } from './add-board-dialog.component';

@NgModule({
  declarations: [AddBoardDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    ButtonModule,
  ],
  exports: [AddBoardDialogComponent],
})
export class AddBoardDialogModule {}
