import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import {
  BoardEntity,
  BoardFacade,
  CardEntity,
  ListEntity,
  ListFacade,
} from '@trello/libs/board/domain';

import { BoardEditCardDialogComponent } from './board-edit-card-dialog';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
  id: string;
  board$: Observable<BoardEntity | undefined>;
  lists$: Observable<ListEntity[] | undefined>;

  constructor(
    private readonly _boardFacade: BoardFacade,
    private readonly _listFacade: ListFacade,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog
  ) {
    this.id = this._route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.board$ = this._boardFacade.board$;
    this.lists$ = this._listFacade.allLists$;
  }

  openCardEdit(card: CardEntity): void {
    const dialogRef = this._dialog.open(BoardEditCardDialogComponent, {
      data: {
        card,
      },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog BoardEditCardDialogComponent: ', result);
    });
  }

  createCard(title: string): void {
    //
  }

  createList(title: string): void {
    //
  }

  starToggle(id: string) {
    //
  }

  favorite(id: string) {
    //
  }

  unfavorite(id: string) {
    //
  }

  updateBoard(id: string, name: string) {
    //
  }

  deleteBoard(): void {
    this._boardFacade.delete(this.id);
  }
}
