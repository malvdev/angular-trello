import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRegisterComponent {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  @ViewChild('inputEmail')
  private readonly _inputEmailRef: ElementRef;

  get email(): AbstractControl | null {
    return this.registerForm.get('email');
  }

  constructor(private readonly _router: Router) {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      this._router.navigate(['/register'], {
        queryParams: this.registerForm.value,
        queryParamsHandling: 'merge',
      });
    } else {
      this._inputEmailRef?.nativeElement.focus();
    }
  }
}
