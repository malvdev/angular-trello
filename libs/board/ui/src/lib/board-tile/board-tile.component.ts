import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { BoardEntity } from '@trello/libs/board/domain';

@Component({
  selector: 'app-ui-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardTileComponent {
  @Input()
  board: BoardEntity;

  @Input()
  favorite: boolean = false;

  @Output()
  favoriteEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  unFavoriteEvent: EventEmitter<string> = new EventEmitter<string>();

  toggleFavorite(event: UIEvent, board: BoardEntity): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.favorite) {
      this.unFavoriteEvent.emit(board.id);
    } else {
      this.favoriteEvent.emit(board.id);
    }
  }

  getBackground(): string | null {
    return this.board?.background || null;
  }
}
