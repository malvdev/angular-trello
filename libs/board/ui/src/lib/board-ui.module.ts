import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBoardsModule } from './list-boards';
import { BoardTileModule } from './board-tile';

@NgModule({
  imports: [CommonModule, ListBoardsModule, BoardTileModule],
})
export class BoardUiModule {}
