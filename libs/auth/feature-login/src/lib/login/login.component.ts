import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthFacade } from '@trello/libs/auth/domain';
import {
  DynamicFieldEntity,
  DynamicFormFacade,
} from '@trello/libs/shared/dynamic-form';

const structure: DynamicFieldEntity[] = [
  {
    type: 'INPUT',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    validator: [Validators.required, Validators.email],
  },
  {
    type: 'INPUT',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    validator: [Validators.required],
    attrs: {
      type: 'password',
    },
  },
];

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  structure$: Observable<DynamicFieldEntity[]>;
  data$: Observable<any>;
  isValid$: Observable<boolean>;

  constructor(
    private readonly _dynamicFormFacade: DynamicFormFacade,
    private readonly _authFacade: AuthFacade
  ) {}

  ngOnInit(): void {
    this._dynamicFormFacade.setStructure(structure);
    this.data$ = this._dynamicFormFacade.data$;
    this.structure$ = this._dynamicFormFacade.structure$;
    this.isValid$ = this._dynamicFormFacade.valid$;
  }

  updateForm(changes: any): void {
    this._dynamicFormFacade.updateData(changes.changes, changes.form.valid);
  }

  submit(): void {
    this._authFacade.login();
  }

  ngOnDestroy(): void {
    this._dynamicFormFacade.initializeForm();
  }
}
