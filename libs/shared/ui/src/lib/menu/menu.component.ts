import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @HostBinding('attr.role')
  role: string = 'navigation';
}
