import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  ProfileEffects,
  ProfileFacade,
  PROFILE_FEATURE_KEY,
  profileReducer,
} from './application';
import { ProfileService } from './infrastructure';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PROFILE_FEATURE_KEY, profileReducer),
    EffectsModule.forFeature([ProfileEffects]),
  ],
  providers: [ProfileService, ProfileFacade],
})
export class ProfileDomainModule {}
