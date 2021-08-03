import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  BoardEffects,
  BoardFacade,
  boardReducer,
  BOARD_FEATURE_KEY,
} from './application';
import { BoardService } from './infrastructure';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(BOARD_FEATURE_KEY, boardReducer),
    EffectsModule.forFeature([BoardEffects]),
  ],
  providers: [BoardFacade, BoardService],
})
export class BoardDomainModule {}
