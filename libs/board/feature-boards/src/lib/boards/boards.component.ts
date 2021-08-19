import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BoardEntity, BoardFacade } from '@trello/libs/board/domain';
import { AddBoardDialogComponent } from '@trello/libs/board/ui';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardsComponent implements OnInit {
  starredBoards$: Observable<BoardEntity[]>;
  recentlyBoards$: Observable<BoardEntity[]>;
  personalBoards$: Observable<BoardEntity[]>;
  boards$: Observable<BoardEntity[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private readonly _boardFacade: BoardFacade,
    private readonly _route: Router,
    private readonly _matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.boards$ = this._boardFacade.allBoard$;
    this.starredBoards$ = this._boardFacade.favoriteBoards$;
    this.isLoading$ = this._boardFacade.loaded$;
  }

  goToBoard(id: string): void {
    this._route.navigate(['/board', id]);
  }

  favorite(id: string): void {
    this._boardFacade.favorite(id);
  }

  unFavorite(id: string): void {
    this._boardFacade.unfavorite(id);
  }

  openAddBoard(): void {
    const dialogRef = this._matDialog.open(AddBoardDialogComponent);
    dialogRef.afterClosed().subscribe((result: BoardEntity) => {
      if (result) {
        this._boardFacade.create(result);
      }
    });
  }
}
