import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './avatar.component';
import { InitialsModule } from '../initials';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, InitialsModule],
  exports: [AvatarComponent],
})
export class AvatarModule {}
