import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoragesModule } from './infrastructure/storages';

@NgModule({
  imports: [CommonModule, StoragesModule],
})
export class AuthDomainModule {}
