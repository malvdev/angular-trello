import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule, BadgeModule, LabelModule } from '@trello/libs/shared/ui';

import { BoardCardComponent } from './board-card.component';

@NgModule({
  declarations: [BoardCardComponent],
  imports: [CommonModule, AvatarModule, LabelModule, BadgeModule],
  exports: [BoardCardComponent],
})
export class BoardCardModule {}
