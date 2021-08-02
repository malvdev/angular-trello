import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface NavTab {
  name: string;
  link: string[];
}

@Component({
  selector: 'app-ui-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTabsComponent {
  @Input()
  tabs: NavTab[] = [];
}
