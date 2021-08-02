import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBoardsModule } from './list-boards';

@NgModule({
  imports: [CommonModule, ListBoardsModule],
})
export class BoardUiModule {}
