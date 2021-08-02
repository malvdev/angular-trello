import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileWrapperComponent } from './profile-wrapper.component';
import { ProfileWrapperContentComponent } from './profile-wrapper-content';
import { ProfileWrapperGroupComponent } from './profile-wrapper-group';
import { ProfileWrapperTitleComponent } from './profile-wrapper-title';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProfileWrapperComponent,
    ProfileWrapperContentComponent,
    ProfileWrapperGroupComponent,
    ProfileWrapperTitleComponent,
  ],
  exports: [
    ProfileWrapperComponent,
    ProfileWrapperContentComponent,
    ProfileWrapperGroupComponent,
    ProfileWrapperTitleComponent,
  ],
})
export class ProfileWrapperModule {}
