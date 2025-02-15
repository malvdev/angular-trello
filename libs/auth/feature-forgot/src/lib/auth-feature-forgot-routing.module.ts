import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [{ path: 'forgot', component: ForgotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthFeatureForgotRoutingModule {}
