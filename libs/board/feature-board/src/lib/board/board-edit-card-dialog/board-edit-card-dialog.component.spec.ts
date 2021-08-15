import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BoardEditCardDialogComponent } from './board-edit-card-dialog.component';

describe('BoardEditCardDialogComponent', () => {
  let component: BoardEditCardDialogComponent;
  let fixture: ComponentFixture<BoardEditCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardEditCardDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardEditCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
