import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardsResolverService } from './boards';
import { BoardsComponent } from './boards/boards.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    resolve: { BoardsResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BoardsResolverService],
})
export class BoardFeatureBoardsRoutingModule {}
