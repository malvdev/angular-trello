import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AuthFacade, Status } from '@trello/libs/auth/domain';
import {
  DynamicFieldEntity,
  DynamicFormFacade,
} from '@trello/libs/shared/dynamic-form';

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit, OnDestroy {
  structure$: Observable<DynamicFieldEntity[]>;
  data$: Observable<any>;
  isValid$: Observable<boolean>;
  status$: Observable<Status>;
  structure: DynamicFieldEntity[] = [
    {
      type: 'INPUT',
      label: 'Email',
      name: 'email',
      defaultValue: this._route.snapshot.queryParamMap.get('email') || '',
      placeholder: 'Enter email',
      validator: [Validators.required, Validators.email],
    },
    {
      type: 'INPUT',
      label: 'Username',
      name: 'username',
      placeholder: 'Enter username',
      validator: [Validators.required],
    },
    {
      type: 'INPUT',
      label: 'Password',
      name: 'password',
      placeholder: 'Enter password',
      validator: [Validators.required],
      attrs: {
        type: 'password',
      },
    },
  ];

  get statusInProgress(): Status {
    return Status.IN_PROGRESS;
  }

  constructor(
    private readonly _dynamicFormFacade: DynamicFormFacade,
    private readonly _authFacade: AuthFacade,
    private readonly _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._dynamicFormFacade.setStructure(this.structure);
    this.data$ = this._dynamicFormFacade.data$;
    this.structure$ = this._dynamicFormFacade.structure$;
    this.isValid$ = this._dynamicFormFacade.valid$;
    this.status$ = this._authFacade.status$;
  }

  updateForm(data: any): void {
    this._dynamicFormFacade.updateData(data.changes, data.form.valid);
  }

  submit(): void {
    this._authFacade.register();
  }

  ngOnDestroy(): void {
    this._dynamicFormFacade.initializeForm();
  }
}
