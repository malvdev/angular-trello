import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileHeaderModule } from './profile-header';
import { ProfileWrapperModule } from './profile-wrapper/profile-wrapper.module';

@NgModule({
  imports: [CommonModule, ProfileHeaderModule, ProfileWrapperModule],
})
export class ProfileUiModule {}
