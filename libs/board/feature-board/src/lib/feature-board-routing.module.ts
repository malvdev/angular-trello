import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardResolverService } from './board/board-resolver.service';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {
    path: 'board/:id',
    component: BoardComponent,
    resolve: { BoardResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BoardResolverService],
})
export class FeatureBoardRoutingModule {}
