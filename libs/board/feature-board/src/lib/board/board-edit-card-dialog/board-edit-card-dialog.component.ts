import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CardEntity } from '@trello/libs/board/domain';

@Component({
  selector: 'app-board-edit-card-dialog',
  templateUrl: './board-edit-card-dialog.component.html',
  styleUrls: ['./board-edit-card-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardEditCardDialogComponent {
  editDescription: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { card: CardEntity }) {}

  toggleEditDescription(): void {
    this.editDescription = !this.editDescription;
  }
}
