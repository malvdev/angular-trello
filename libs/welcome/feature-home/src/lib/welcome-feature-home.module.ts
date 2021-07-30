import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, FormFieldModule } from '@trello/libs/shared/ui';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content';
import { HomeHeaderComponent } from './home-header';
import { HomeRegisterComponent } from './home-register';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeContentComponent,
    HomeRegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    ButtonModule,
    FormFieldModule,
  ],
  exports: [RouterModule],
})
export class WelcomeFeatureHomeModule {}
