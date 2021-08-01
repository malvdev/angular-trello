import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-oauth-button',
  templateUrl: './oauth-button.component.html',
  styleUrls: ['./oauth-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OauthButtonComponent {}
