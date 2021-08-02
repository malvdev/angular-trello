import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button';
import { FormFieldModule } from './form-field';
import { IconSvgModule } from './icon-svg';
import { MainTemplateModule } from './main-template';
import { NavTabsModule } from './nav-tabs';
import { InitialsModule } from './initials';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormFieldModule,
    IconSvgModule,
    MainTemplateModule,
    NavTabsModule,
    InitialsModule,
  ],
})
export class SharedUiModule {}
