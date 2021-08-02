import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavTabsModule } from '@trello/libs/shared/ui';

import { ProfileHeaderComponent } from './profile-header.component';

@NgModule({
  declarations: [ProfileHeaderComponent],
  imports: [CommonModule, NavTabsModule],
  exports: [ProfileHeaderComponent],
})
export class ProfileHeaderModule {}
