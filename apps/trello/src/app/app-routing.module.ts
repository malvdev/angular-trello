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
  {
    path: '',
    loadChildren: () =>
      import('@trello/libs/auth/feature-forgot').then(
        (m) => m.AuthFeatureForgotModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@trello/libs/profile/feature-profile').then(
        (m) => m.FeatureProfileModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@trello/libs/board/feature-boards').then(
        (m) => m.BoardFeatureBoardsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@trello/libs/board/feature-board').then(
        (m) => m.FeatureBoardModule
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
