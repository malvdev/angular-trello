import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ui-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBoardDialogComponent {
  addBoardForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    visibility: new FormControl('private', [Validators.required]),
    background: new FormControl('lightgrey', [Validators.required]),
  });

  constructor(
    private readonly _dialogRef: MatDialogRef<AddBoardDialogComponent>
  ) {}

  onSubmit(): void {
    if (this.addBoardForm.valid) {
      this._dialogRef.close(this.addBoardForm.value);
    }
  }
}
