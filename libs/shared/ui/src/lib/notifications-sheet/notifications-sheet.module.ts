import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsSheetComponent } from './notifications-sheet.component';

@NgModule({
  declarations: [NotificationsSheetComponent],
  imports: [CommonModule],
  exports: [NotificationsSheetComponent],
})
export class NotificationsSheetModule {}
