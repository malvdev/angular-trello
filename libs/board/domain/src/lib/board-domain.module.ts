import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  BoardEffects,
  BoardFacade,
  boardReducer,
  BOARD_FEATURE_KEY,
  ListEffects,
  ListFacade,
  listReducer,
  LIST_FEATURE_KEY,
} from './application';
import { BoardService, ListService } from './infrastructure';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(BOARD_FEATURE_KEY, boardReducer),
    StoreModule.forFeature(LIST_FEATURE_KEY, listReducer),
    EffectsModule.forFeature([BoardEffects, ListEffects]),
  ],
  providers: [BoardFacade, ListFacade, BoardService, ListService],
})
export class BoardDomainModule {}
