import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWrapperTitleComponent } from './profile-wrapper-title.component';

describe('ProfileWrapperTitleComponent', () => {
  let component: ProfileWrapperTitleComponent;
  let fixture: ComponentFixture<ProfileWrapperTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileWrapperTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWrapperTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
