import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthFacade, UserEntity } from '@trello/libs/auth/domain';
import { ProfileFacade, ProfileEntity } from '@trello/libs/profile/domain';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const passwordNew = control.get('passwordNew');
  const passwordConfirm = control.get('passwordConfirm');

  return passwordNew &&
    passwordConfirm &&
    passwordNew.value === passwordConfirm.value
    ? null
    : { mismatch: true };
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  profile$: Observable<ProfileEntity>;
  currentUser$: Observable<UserEntity>;

  profileForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  passwordForm: FormGroup = new FormGroup(
    {
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordNew: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    { validators: passwordMatchValidator }
  );

  get username(): AbstractControl | null {
    return this.profileForm.get('username');
  }

  get email(): AbstractControl | null {
    return this.profileForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.passwordForm.get('password');
  }

  get passwordNew(): AbstractControl | null {
    return this.passwordForm.get('passwordNew');
  }

  get passwordConfirm(): AbstractControl | null {
    return this.passwordForm.get('passwordConfirm');
  }

  constructor(
    private readonly _authFacade: AuthFacade,
    private readonly _profileFacade: ProfileFacade
  ) {}

  ngOnInit(): void {
    this.profile$ = this._profileFacade.profile$;
    this.currentUser$ = this._authFacade.user$;
  }

  onProfileSubmit(): void {
    if (this.profileForm.valid) {
      this._profileFacade.updateProfile(this.profileForm.value);
    }
  }

  onPasswordSubmit(): void {
    if (this.passwordForm.valid) {
      this._profileFacade.updatePassword(this.passwordForm.value);
    }
  }
}
