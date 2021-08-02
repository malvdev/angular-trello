import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBoardsComponent } from './list-boards.component';

@NgModule({
  declarations: [ListBoardsComponent],
  imports: [CommonModule],
  exports: [ListBoardsComponent],
})
export class ListBoardsModule {}
