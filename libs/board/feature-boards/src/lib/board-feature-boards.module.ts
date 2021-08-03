import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { BoardDomainModule } from '@trello/libs/board/domain';
import {
  AddBoardDialogModule,
  AddBoardTileModule,
  BoardTileModule,
  ListBoardsModule,
} from '@trello/libs/board/ui';
import { MainTemplateModule, MenuModule } from '@trello/libs/shared/ui';

import { BoardFeatureBoardsRoutingModule } from './board-feature-boards-routing.module';
import { BoardsComponent } from './boards/boards.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BoardDomainModule,
    ListBoardsModule,
    MatDialogModule,
    BoardFeatureBoardsRoutingModule,
    MainTemplateModule,
    BoardTileModule,
    AddBoardTileModule,
    MenuModule,
    AddBoardDialogModule,
  ],
  declarations: [BoardsComponent],
})
export class BoardFeatureBoardsModule {}
