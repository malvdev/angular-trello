import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';

import { DynamicFormFacade } from '../../application';

@Component({
  selector: 'app-dynamic-form-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListErrorsComponent implements OnInit, OnDestroy {
  errors: string[];
  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private readonly _dynamicFormFacade: DynamicFormFacade,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._dynamicFormFacade.errors$.subscribe((e) => {
      this.errors = Object.keys(e || {}).map((key) => `${key} ${e[key]}`);
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this._dynamicFormFacade.initializeErrors();
  }
}
