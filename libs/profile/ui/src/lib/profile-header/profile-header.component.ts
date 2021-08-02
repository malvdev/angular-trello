import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NavTab } from '@trello/libs/shared/ui';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileHeaderComponent {
  tabs: NavTab[] = [
    {
      name: 'Profile',
      link: ['/profile'],
    },
    {
      name: 'Settings',
      link: ['/settings'],
    },
  ];
}
