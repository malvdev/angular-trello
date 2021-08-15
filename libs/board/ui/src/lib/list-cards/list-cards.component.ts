import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ListEntity } from '@trello/libs/board/domain';

@Component({
  selector: 'app-ui-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardsComponent {
  @Input()
  list: ListEntity;
}
