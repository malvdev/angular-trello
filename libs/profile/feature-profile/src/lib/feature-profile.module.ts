import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonModule,
  FormFieldModule,
  MainTemplateModule,
} from '@trello/libs/shared/ui';
import { ProfileDomainModule } from '@trello/libs/profile/domain';
import {
  ProfileHeaderModule,
  ProfileWrapperModule,
} from '@trello/libs/profile/ui';

import { ProfileFeatureRoutingModule } from './profile-feature-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileFeatureRoutingModule,
    ProfileDomainModule,
    RouterModule,
    ReactiveFormsModule,
    ProfileHeaderModule,
    ProfileWrapperModule,
    ButtonModule,
    FormFieldModule,
    MainTemplateModule,
  ],
  declarations: [ProfileComponent, SettingsComponent],
})
export class FeatureProfileModule {}
