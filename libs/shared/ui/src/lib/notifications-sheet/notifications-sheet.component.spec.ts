import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSheetComponent } from './notifications-sheet.component';

describe('NotificationsSheetComponent', () => {
  let component: NotificationsSheetComponent;
  let fixture: ComponentFixture<NotificationsSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsSheetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
