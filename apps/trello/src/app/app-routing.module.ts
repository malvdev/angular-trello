import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@trello/libs/welcome/feature-home').then(
        (m) => m.WelcomeFeatureHomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@trello/libs/auth/feature-register').then(
        (m) => m.AuthFeatureRegisterModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
