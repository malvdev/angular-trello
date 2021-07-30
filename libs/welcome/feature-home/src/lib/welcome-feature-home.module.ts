import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '@trello/libs/shared/ui';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content';
import { HomeHeaderComponent } from './home-header';

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, HomeContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    ButtonModule,
  ],
  exports: [RouterModule],
})
export class WelcomeFeatureHomeModule {}
