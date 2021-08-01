import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthFacade, Status } from '@trello/libs/auth/domain';
import {
  DynamicFieldEntity,
  DynamicFormFacade,
} from '@trello/libs/shared/dynamic-form';

const structure: DynamicFieldEntity[] = [
  {
    type: 'INPUT',
    name: 'email',
    label: "We'll send a recovery link to",
    placeholder: 'Enter email',
    validator: [Validators.required, Validators.email],
  },
];

@Component({
  selector: 'app-auth-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotComponent implements OnInit, OnDestroy {
  structure$: Observable<DynamicFieldEntity[]>;
  data$: Observable<any>;
  isValid$: Observable<boolean>;
  status$: Observable<Status>;

  get statusInProgress(): Status {
    return Status.IN_PROGRESS;
  }

  constructor(
    private readonly _dynamicFormFacade: DynamicFormFacade,
    private readonly _authFacade: AuthFacade
  ) {}

  ngOnInit(): void {
    this._dynamicFormFacade.setStructure(structure);
    this.data$ = this._dynamicFormFacade.data$;
    this.structure$ = this._dynamicFormFacade.structure$;
    this.isValid$ = this._dynamicFormFacade.valid$;
    this.status$ = this._authFacade.status$;
  }

  updateForm(data: any): void {
    this._dynamicFormFacade.updateData(data.changes, data.form.valid);
  }

  submit(): void {
    this._authFacade.forgot();
  }

  ngOnDestroy(): void {
    this._dynamicFormFacade.initializeForm();
  }
}
