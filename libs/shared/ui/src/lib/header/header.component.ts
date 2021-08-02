import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { AuthFacade, UserEntity } from '@trello/libs/auth/domain';
import { Observable } from 'rxjs';

import { Avatar } from '../avatar';
import { NotificationsSheetComponent } from '../notifications-sheet';

@Component({
  selector: 'app-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<UserEntity>;
  avatar: Avatar = {
    username: 'Default',
  };

  constructor(
    private readonly _authFacade: AuthFacade,
    private readonly _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this._authFacade.user$;
  }

  openNotificationsSheet(): void {
    this._bottomSheet.open(NotificationsSheetComponent);
  }

  logout(): void {
    this._authFacade.logout();
  }
}
