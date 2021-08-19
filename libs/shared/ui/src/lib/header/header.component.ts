import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { MemberEntity } from '@trello/libs/board/domain';

import { NotificationsSheetComponent } from '../notifications-sheet';

@Component({
  selector: 'app-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  avatar: MemberEntity = {
    username: 'Default',
  };

  constructor(private readonly _bottomSheet: MatBottomSheet) {}

  openNotificationsSheet(): void {
    this._bottomSheet.open(NotificationsSheetComponent);
  }

  logout(): void {
    console.log('Logout');
  }
}
