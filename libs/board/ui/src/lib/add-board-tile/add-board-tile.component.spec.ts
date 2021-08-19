import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardTileComponent } from './add-board-tile.component';

describe('AddBoardTileComponent', () => {
  let component: AddBoardTileComponent;
  let fixture: ComponentFixture<AddBoardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBoardTileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
