import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBoardsModule } from './list-boards';
import { BoardTileModule } from './board-tile';
import { AddBoardTileModule } from './add-board-tile';
import { AddBoardDialogModule } from './add-board-dialog';
import { AddBoardCardModule } from './add-board-card';
import { BoardCardModule } from './board-card';

@NgModule({
  imports: [
    CommonModule,
    ListBoardsModule,
    BoardTileModule,
    AddBoardTileModule,
    AddBoardDialogModule,
    AddBoardCardModule,
    BoardCardModule,
  ],
})
export class BoardUiModule {}
