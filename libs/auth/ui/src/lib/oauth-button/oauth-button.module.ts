import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@trello/libs/shared/ui';

import { OauthButtonComponent } from './oauth-button.component';

@NgModule({
  declarations: [OauthButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports: [OauthButtonComponent],
})
export class OauthButtonModule {}
