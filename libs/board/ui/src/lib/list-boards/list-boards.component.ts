import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-list-boards',
  templateUrl: './list-boards.component.html',
  styleUrls: ['./list-boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBoardsComponent {
  @Input()
  titleBoard: string;
}
