import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { CardEntity } from '@trello/libs/board/domain';

@Component({
  selector: 'app-ui-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardCardComponent {
  @Input()
  card: CardEntity;
}
