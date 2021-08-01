import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Observable, Subject, combineLatest } from 'rxjs';
import { debounceTime, map, takeUntil, tap, filter } from 'rxjs/operators';
import { DynamicFieldEntity } from '../../entities';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject();
  form: FormGroup;

  @Input()
  structure$: Observable<DynamicFieldEntity[]>;

  @Input()
  data$: Observable<any>;

  @Input()
  touchedForm$: Observable<boolean>;

  @Output()
  updateForm: EventEmitter<any> = new EventEmitter();

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.structure$
      .pipe(
        map(this.formBuilder),
        tap((f) => (this.form = f)),
        tap((f) => this.listenFormChanges(f)),
        (f$) => combineLatest([f$, this.data$]),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(this.patchValue);

    if (this.touchedForm$) {
      this.touchedForm$
        .pipe(
          filter((t) => !t && !!this.form),
          takeUntil(this.unsubscribe$)
        )
        .subscribe(() => this.form.reset());
    }
  }

  getFormField(fieldName: string): AbstractControl | null {
    return this.form.get(fieldName);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private formBuilder = (structure: DynamicFieldEntity[]): FormGroup => {
    const group = this._formBuilder.group({});
    structure.forEach((field) =>
      group.addControl(field.name, this.control(field))
    );
    return group;
  };

  private control = (field: DynamicFieldEntity): FormControl => {
    return this._formBuilder.control(field.defaultValue || '', field.validator);
  };

  private patchValue = ([form, data]: any) => {
    data
      ? form.patchValue(data, { emitEvent: false })
      : form.patchValue({}, { emitEvent: false });
  };

  private listenFormChanges(form: FormGroup) {
    form.valueChanges
      .pipe(debounceTime(100), takeUntil(this.unsubscribe$))
      .subscribe((changes: any) => this.updateForm.emit({ changes, form }));
  }
}
