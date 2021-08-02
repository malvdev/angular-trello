import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonModule,
  FormFieldModule,
  MainTemplateModule,
} from '@libs/shared/ui';
import { ProfileHeaderModule } from '@libs/profile/ui';
import { ProfileDomainLogicModule } from '@libs/profile/domain-logic';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProfileDomainLogicModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    ProfileHeaderModule,
    AvatarModule,
    ButtonModule,
    FormFieldModule,
    MainTemplateModule,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
