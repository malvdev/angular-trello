import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileHeaderModule } from './profile-header';

@NgModule({
  imports: [CommonModule, ProfileHeaderModule],
})
export class ProfileUiModule {}
