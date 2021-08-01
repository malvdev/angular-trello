import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-logo',
  templateUrl: './auth-logo.component.html',
  styleUrls: ['./auth-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLogoComponent {}
