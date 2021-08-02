import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavTabsComponent } from './nav-tabs.component';

@NgModule({
  declarations: [NavTabsComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavTabsComponent],
})
export class NavTabsModule {}
