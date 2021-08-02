import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonModule,
  FormFieldModule,
  MainTemplateModule,
  NavTabsModule,
} from '@trello/libs/shared/ui';
import { ProfileDomainModule } from '@trello/libs/profile/domain';
import { ProfileHeaderModule } from '@trello/libs/profile/ui';

import { ProfileFeatureRoutingModule } from './profile-feature-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileFeatureRoutingModule,
    ProfileDomainModule,
    RouterModule,
    ReactiveFormsModule,
    ProfileHeaderModule,
    ButtonModule,
    FormFieldModule,
    MainTemplateModule,
    NavTabsModule,
  ],
  declarations: [ProfileComponent],
})
export class FeatureProfileModule {}
