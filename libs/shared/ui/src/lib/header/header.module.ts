import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header.component';
import { ButtonModule } from '../button';
import { AvatarModule } from '../avatar';
import { SearchInputModule } from '../search-input';
import { NotificationsSheetModule } from '../notifications-sheet';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatBottomSheetModule,
    NotificationsSheetModule,
    AvatarModule,
    SearchInputModule,
    MatMenuModule,
    MatIconModule,
    ButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
