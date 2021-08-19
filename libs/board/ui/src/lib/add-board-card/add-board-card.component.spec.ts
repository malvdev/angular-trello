import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { ButtonModule, FocusAndSelectModule } from '@trello/libs/shared/ui';

import { AddBoardCardComponent } from './add-board-card.component';

describe('AddBoardCardComponent', () => {
  let component: AddBoardCardComponent;
  let fixture: ComponentFixture<AddBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatIconModule, FocusAndSelectModule, ButtonModule],
      declarations: [AddBoardCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
