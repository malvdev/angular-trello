import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { BoardDomainModule } from '@trello/libs/board/domain';
import {
  AddBoardCardModule,
  BoardCardModule,
  ListCardsModule,
} from '@trello/libs/board/ui';
import {
  ButtonModule,
  AvatarModule,
  MainTemplateModule,
  FocusAndSelectModule,
} from '@trello/libs/shared/ui';

import { FeatureBoardRoutingModule } from './feature-board-routing.module';
import { BoardComponent } from './board/board.component';
import { BoardEditCardDialogComponent } from './board/board-edit-card-dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BoardDomainModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    FeatureBoardRoutingModule,
    MatDialogModule,
    MainTemplateModule,
    ButtonModule,
    AddBoardCardModule,
    BoardCardModule,
    FocusAndSelectModule,
    AvatarModule,
    ListCardsModule,
  ],
  declarations: [BoardComponent, BoardEditCardDialogComponent],
  exports: [BoardEditCardDialogComponent],
})
export class FeatureBoardModule {}
